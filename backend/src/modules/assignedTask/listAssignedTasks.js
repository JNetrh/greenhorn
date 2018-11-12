import { AssignedTask, Task, TaskStatus } from '../../models';
export const listAssignedTasks = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task, TaskStatus],
  });
  res.json(assignedTask);
};
