import { User, Group, Task, AssignedTask } from '../../models';
import { setWorkflows } from '../../services/workflow/addWorkflow';

export const updateUserGroupsAndAssignTasks = async (userId, groupIds) => {
  await checkConditions(userId, groupIds);
  await updateUserGroups(userId, groupIds);
  const assignedTasksToCreate = await asignTasksFromGroups(userId);
  await createWorkflowEntry(assignedTasksToCreate);
};

// -- HELPERS -- //

const updateUserGroups = async (userId, groupIds) => {
  const user = await User.findByPk(userId, { include: [Group] }),
    groups = await Group.findAll({ where: { id: groupIds } }),
    userGroups = user.Groups.map(group => group.id),
    groupsTodel = user.Groups.filter(group => !groupIds.includes(group.id)),
    groupsToAdd = groups.filter(group => !userGroups.includes(group.id));

  await user.removeGroups(groupsTodel);
  await user.addGroups(groupsToAdd);
};

const checkConditions = async (userId, groupIds) => {
  if (!Array.isArray(groupIds)) {
    throw { msg: 'groups has to be an array', status: 400 };
  }
  const user = await User.findByPk(userId, { include: [Group] });
  if (!user) {
    throw { msg: 'user not found', status: 404 };
  }
  const groups = await Group.findAll({
    where: {
      id: groupIds,
    },
  });
  if (!groups) {
    throw { msg: 'error fetching groups', status: 400 };
  }
};

const asignTasksFromGroups = async userId => {
  const user = await User.findByPk(userId, {
    include: [Group, AssignedTask],
  });

  const tasks = await Task.findAll({
    where: {
      groupId: user.Groups.map(e => e.id),
    },
  });

  const groupTasks = tasks.map(task => task.id);
  const userTasks = user.AssignedTasks.map(task => task.TaskId);

  const tasksToDel = user.AssignedTasks.filter(
    task => !groupTasks.includes(task.TaskId)
  );

  const tasksToAdd = tasks.filter(task => !userTasks.includes(task.id));

  const assignedTasksToCreate = tasksToAdd.map(task => {
    Date.prototype.addDays = function(days) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    let until = new Date();

    until = until.addDays(task.estimatedTime);

    return {
      note: null,
      until,
      TaskId: task.id,
      UserId: user.id,
    };
  });

  await AssignedTask.destroy({
    where: { id: tasksToDel.map(e => e.id) },
  });
  const write = await AssignedTask.bulkCreate(assignedTasksToCreate);
  return write;
};

const createWorkflowEntry = async assignedTasksToCreate => {
  const workflowsToCreate = assignedTasksToCreate.map(
    ({ note, id, UserId }) => ({
      note,
      status: 'assigned',
      assignedTask: id,
      submitUser: UserId,
    })
  );
  await setWorkflows(workflowsToCreate);
};
