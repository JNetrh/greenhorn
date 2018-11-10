import { AssignedTask, Task } from '../../models';
export const listAssignedTasks = async (req, res) => {
  // const assignedTask = await Task.findAll({
  //   include: [
  //     {
  //       model: AssignedTask,
  //       where: { UserId: req.userId },
  //     },
  //   ],
  // });
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [Task],
  });
  res.json(assignedTask);
};
