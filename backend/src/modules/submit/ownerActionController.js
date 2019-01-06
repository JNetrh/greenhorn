import { setWorkflow } from '../../services/workflow/addWorkflow';
import { Workflow, TaskStatus } from '../../models';
import { getAssignedTask } from '../assignedTask/getAssignedTask';

export const ownerActionController = async (req, res) => {
  const { status, assignedTaskId, note } = req.body;

  try {
    const allRecords = await Workflow.findAll({
      where: { AssignedTaskId: assignedTaskId },
      include: [TaskStatus],
      order: [['createdAt', 'desc']],
    });

    if (allRecords[0].TaskStatus.name === 'assigned') {
      return res
        .status(400)
        .json({ msg: 'Task assigned. Now wait for the user response.' });
    }

    if (allRecords[0].TaskStatus.name === 'done') {
      return res.status(409).json({ msg: 'Task already marked as done.' });
    }

    const workflow = await setWorkflow({
      status,
      assignedTask: assignedTaskId,
      note,
      submitUser: req.userId,
    });

    console.log('Workflow updated', workflow.id);

    const assignedTask = await getAssignedTask(assignedTaskId);
    console.log('Getting task', assignedTask.id);
    return res.json(assignedTask);
  } catch (error) {
    return res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
