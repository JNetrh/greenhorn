import {
  AssignedTask,
  Task,
  Workflow,
  User,
  Document,
  TaskStatus,
} from '../../models';

export const listAssignedTaskForReview = async (req, res) => {
  if (req.role === 'user') {
    return res.status(403).json({ msg: 'You cannot review tasks.' });
  }

  const filterByRole = assignedTasks => {
    if (req.role === 'hr') {
      return assignedTasks;
    }
    return assignedTasks.filter(({ Task: { owners } }) =>
      owners.map(({ id }) => id).includes(req.userId)
    );
  };

  const assignedTasks = await AssignedTask.findAll({
      include: [
        {
          model: Task,
          include: [
            {
              model: User,
              as: 'owners',
            },
          ],
        },
        {
          model: Workflow,
          include: [{ model: User, as: 'submittedBy' }, Document, TaskStatus],
        },
      ],
      order: [[Workflow, 'createdAt', 'desc']],
    }),
    availableTasks = filterByRole(assignedTasks),
    assignedTasksWithCurrentWorkflow = availableTasks.map(task => ({
      ...task.toJSON(),
      currentWorkflow: task.Workflows[0],
    }));
  return res.json(assignedTasksWithCurrentWorkflow);
};
