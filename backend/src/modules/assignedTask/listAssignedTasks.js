import { AssignedTask, Task } from '../../models';
export const listAssignedTasks = async (req, res) => {
  const assignedTasks = await AssignedTask.findAll({
    where: { UserId: req.userId },
  });
  const tasks = await Task.findAll({
    where: { id: assignedTasks.map(task => task.TaskId) },
  });
  res.json(tasks);
};
