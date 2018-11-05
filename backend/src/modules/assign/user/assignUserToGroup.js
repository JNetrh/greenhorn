import { User, Group, Task, AssignedTask } from '../../../models';
import { stripPassword } from '../../../services/password/stripPassword';

const findGroupsById = async groupIds => {
  return await Group.findAll({
    where: {
      id: groupIds,
    },
  });
};

export const assignUserToGroup = async (req, res) => {
  const { userId, groupIds } = req.body;

  try {
    if (!Array.isArray(groupIds)) {
      return res.status(400).json({ msg: 'group ids needs to be an array' });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const groups = await findGroupsById(groupIds);

    if (!groups) {
      return res.status(400).json({ msg: 'Groups fetch failed' });
    }

    await user.addGroups(groups);

    const assignedGroups = await User.findByPk(userId, {
      include: [Group],
    });

    // await asignTasksFromGroups(assignedGroups);

    await createAssignment();

    return res.json(assignedGroups);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// -- HELPERS -- //

const createAssignment = async () => {
  const user = await User.findByPk(1);
  const task = await Task.findByPk(1);

  console.log(Object.keys(task.addAssignedTask));
  await task.addAssignedTask();
};

const asignTasksFromGroups = async user => {
  const tasks = await Task.findAll({
    where: {
      groupId: user.Groups.map(e => e.id),
    },
  });
  // console.log(tasks);
  // console.log(Task.prototype);
  // console.log(AssignedTask.prototype);
  console.log(User.prototype);
  // const tasks = [];
  // return await user.addAssignedTask(tasks[0]);
  AssignedTask.create({
    title,
    estimatedTime,
    severity,
    description,
    createdBy: req.userId,
  });
  return;
};
