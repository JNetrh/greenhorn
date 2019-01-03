import {
  AssignedTask,
  Task,
  Workflow,
  TaskStatus,
  User,
  Document,
} from '../../models';

export const getAssignedTask = id =>
  AssignedTask.findOne({
    where: { id },
    include: [
      {
        model: Workflow,
        include: [
          { model: TaskStatus, where: { not: { name: 'done' } } },
          { model: User, as: 'submittedBy' },
          Document,
        ],
      },
      { model: Task, include: [Document] },
    ],
    order: [[Workflow, 'createdAt', 'asc']],
  });
