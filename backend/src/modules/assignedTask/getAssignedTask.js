import {
  AssignedTask,
  Task,
  Workflow,
  TaskStatus,
  User,
  Document,
} from '../../models';

export const getAssignedTask = async id => {
  const assignedTask = await AssignedTask.findOne({
    where: { id },
    include: [
      {
        model: Workflow,
        include: [
          { model: TaskStatus },
          { model: User, as: 'submittedBy' },
          Document,
        ],
      },
      { model: Task, include: [Document] },
      User,
    ],
    order: [[Workflow, 'createdAt', 'desc']],
  });
  return {
    ...assignedTask.toJSON(),
    currentWorkflow: assignedTask.Workflows[0],
  };
};
