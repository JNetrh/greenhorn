import { setWorkflow } from '../../services/workflow/addWorkflow';
import { saveDocumentInfo } from '../../services/upload/saveDocumentInfo';
import { getAssignedTask } from '../assignedTask/getAssignedTask';

export const submitController = async (req, res) => {
  const { status, assignedTaskId, comment } = JSON.parse(req.body.data);
  //TODO: save files into DB
  try {
    const workflow = await setWorkflow({
      status,
      assignedTask: assignedTaskId,
      note: comment,
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
