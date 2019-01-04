import { AssignedTask, Task, Workflow, TaskStatus, User } from '../../models';
import { getAssignedTask } from './getAssignedTask';

export const listAssignedTasksController = async (req, res) => {
  const assignedTask = await AssignedTask.findAll({
    where: { UserId: req.userId },
    include: [
      Task,
      {
        model: Workflow,
        include: [{ model: TaskStatus }, { model: User, as: 'submittedBy' }],
      },
    ],
    order: [[Workflow, 'createdAt', 'desc']],
  });
  const withLastWorkflow = assignedTask.map(task => ({
    ...task.toJSON(),
    currentWorkflow: task.Workflows[0],
  }));

  const notDoneTasks = withLastWorkflow.filter(
    item => item.currentWorkflow.TaskStatus.name !== 'done'
  );
  return res.json(notDoneTasks);
};

export const getAssignedTaskByIdController = async (req, res) => {
  const { id } = req.params;
  const assignedTask = await getAssignedTask(id);
  if (!assignedTask) {
    return res.status(404).json({ msg: `Assigned task not found` });
  }

  return res.json(assignedTask);
};
