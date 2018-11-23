import { AssignedTask, Task } from '../../models';
export const listAssignedTasksController = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task],
  });
  res.json(assignedTask);
};
export const listAssignedTaskByIdController = async (req, res) => {
  const { id } = req.param;
  const assignedTask = await AssignedTask.findByPk({
    where: { id: id },
    include: [Task],
  });
  res.json(assignedTask);
};
