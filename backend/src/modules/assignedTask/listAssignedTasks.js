import { AssignedTask, Task, Workflow } from '../../models';
export const listAssignedTasks = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task, Workflow],
  });
  res.json(assignedTask);
};
