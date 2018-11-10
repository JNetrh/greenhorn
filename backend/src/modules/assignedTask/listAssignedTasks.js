import { AssignedTask, Task } from '../../models';
export const listAssignedTasks = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task],
  });
  res.json(assignedTask);
};
