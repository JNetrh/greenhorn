import { Task, AssignedTask, Workflow } from '../../models';
import { setWorkflows } from '../workflow/addWorkflow';

export const checkTasks = async () => {
  const Tasks = await AssignedTask.findAll({
    include: [
      {
        model: Workflow,
        where: {
          TaskStatusId: 4,
        },
      },
      {
        model: Task,
        where: {
          periodicity: {
            $ne: null,
          },
        },
      },
    ],
  });
  const date = new Date();
  date.setHours(0, 0, 0, 0, 0);

  console.log('length', Tasks.length);
  for (var i in Tasks) {
    Tasks[i].Workflows[0].createdAt.setHours(0, 0, 0, 0);
    Tasks[i].Workflows[0].createdAt.setDate(
      Tasks[i].Workflows[0].createdAt.getDate() + Tasks[i].Task.periodicity
    );

    if (Tasks[i].Workflows[0].createdAt.getTime() === date.getTime()) {
      assignedTask(Tasks[i]);
    }
  }
};

export const assignedTask = async Tasks => {
  try {
    const assignedTaskData = Tasks;
    assignedTaskData.until.setDate(
      assignedTaskData.until.getDate() + assignedTaskData.Task.periodicity
    );

    const until = assignedTaskData.until;
    const note = assignedTaskData.note;
    const TaskId = assignedTaskData.TaskId;
    const UserId = assignedTaskData.UserId;

    await AssignedTask.create({
      until,
      note,
      TaskId,
      UserId,
    });
    Workflow.create({
      note,
      TaskStatusId: 1,
      SubmitedUserId: UserId,
      AssignedTaskId: UserId,
    });
  } catch (err) {
    console.log(err);
    return 'Internal server error / Cron create assignedTask';
  }
};
