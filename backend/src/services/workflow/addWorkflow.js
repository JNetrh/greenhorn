import { Workflow, TaskStatus } from '../../models';
export const setWorkflow = async ({
  note,
  status,
  assignedTask,
  submitUser,
}) => {
  if (typeof assignedTask === 'object') {
    assignedTask = assignedTask.id;
  }
  if (typeof submitUser === 'object') {
    submitUser = submitUser.id;
  }
  if (typeof status === 'string') {
    status = await TaskStatus.findOne({ where: { name: status } });
  }

  return Workflow.create({
    note,
    TaskStatusId: status.id,
    SubmitedUserId: submitUser,
    AssignedTaskId: assignedTask,
  });
};

export const setWorkflows = async workflows => {
  workflows = workflows.map(
    async ({ note, status, assignedTask, submitUser }) => {
      if (typeof assignedTask === 'object') {
        assignedTask = assignedTask.id;
      }
      if (typeof submitUser === 'object') {
        submitUser = submitUser.id;
      }
      if (typeof status === 'string') {
        status = await TaskStatus.findOne({ where: { name: status } });
      }
      const result = {
        note,
        TaskStatusId: status.id,
        SubmitedUserId: submitUser,
        AssignedTaskId: assignedTask,
      };
      return result;
    }
  );
  const result = await Promise.all(workflows);
  return await Workflow.bulkCreate(result);
};
