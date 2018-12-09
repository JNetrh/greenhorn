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
        include: [TaskStatus, { model: User, as: 'submittedBy' }, Document],
      },
      { model: Task, include: [Document] },
    ],
    order: [[Workflow, 'createdAt', 'asc']],
  });
