import { setWorkflow } from '../../services/workflow/addWorkflow';
import { saveDocumentInfo } from '../../services/upload/saveDocumentInfo';
import { getAssignedTask } from '../assignedTask/getAssignedTask';

import { Workflow, TaskStatus } from '../../models';

export const submitController = async (req, res) => {
  const { status, assignedTaskId, note } = JSON.parse(req.body.data);

  const allRecords = await Workflow.findAll({
    where: { AssignedTaskId: assignedTaskId },
    include: [TaskStatus],
    order: [['createdAt', 'desc']],
  });

  if (
    allRecords[0].TaskStatus.name === 'submitted' ||
    allRecords[0].TaskStatus.name === 'done'
  ) {
    return res.status(409).json({ msg: 'Task already submitted' });
  }

  try {
    const workflow = await setWorkflow({
      status,
      assignedTask: assignedTaskId,
      note,
      submitUser: req.userId,
    });
    await saveDocumentInfo(req.files, { WorkflowId: workflow.id });
    const updatedAssignedTask = await getAssignedTask(assignedTaskId);
    return res.json(updatedAssignedTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
