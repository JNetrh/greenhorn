import { Task, Group } from '../../../models';

export const assignTaskToGroup = async (req, res) => {
  const { groupId, taskIds } = req.body;

  try {
    const group = await Group.findByPk(groupId, { include: [Task] });

    const tasks = await Task.findAll({
      where: {
        id: taskIds,
      },
    });

    await checkConditions(group, taskIds, tasks);

    await updateGroupTasks(group, taskIds);
    /**
     * TODO: když ten task odstraním, už ve skupině nebude, ale assignutý z dřívějška
     * u nějakého usera být může. Musím projet databázi a zajistit, aby ten task, pokud nemá
     * skupinu nebyl u nikoho přiřazen.
     * Stejně tak nově přiřazený task do skupiny se musí přiřadit všem uživatelům.
     *
     * poznámka: dala by se vymyslet api andpoint na přeřazení tasku mezi skupinami. Protože po vymyzání tasku ze skupiny se
     *           nyní smaže odevšad. Takže na tomto endpoinntu by se pouze přeřadil task mezi skupinami a nemusely by se mazat
     *           data z tabulky assigned Task a Workflow
     *
     * poznámka2: pokud půjde task přiřadit ručně, měl by být z tohoto mazání vyjmut. Prostě by měl jít smazat
     *            pouze zase jen ručně. Ať je nebo není v nějaké skupině
     */

    const groupTasks = await Group.findByPk(groupId, { include: [Task] });

    return res.json(groupTasks);
  } catch (error) {
    console.error(error);
    if (Object.hasOwnProperty('status', error)) {
      return res.status(err.status).json(err.error);
    }
    return res.status(500).json(error);
  }
};

// -- HELPERS -- //

const updateGroupTasks = async (group, taskIds) => {
  const currTasks = group.Tasks.map(task => task.id);
  const newTasks = taskIds;

  return new Promise(async (resolve, reject) => {
    try {
      await Task.update(
        {
          GroupId: null,
        },
        {
          where: {
            id: currTasks,
          },
        }
      );
      await Task.update(
        {
          GroupId: group.id,
        },
        {
          where: {
            id: newTasks,
          },
        }
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

const checkConditions = (group, taskIds, tasks) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(taskIds)) {
      reject({ error: { msg: 'tasks has to be an array' }, status: 400 });
    }
    if (!group) {
      reject({ error: { msg: 'group not found' }, status: 404 });
    }
    if (!tasks) {
      reject({ error: { msg: 'error fetching tasks' }, status: 400 });
    }
    resolve();
  });
};
