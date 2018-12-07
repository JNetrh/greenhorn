import { setWorkflow } from '../../services/workflow/addWorkflow';
import { saveDocumentInfo } from '../../services/upload/saveDocumentInfo';

export const submitController = async (req, res) => {
  const { status, assignedTask, comment } = JSON.parse(req.body.data);
  //TODO: save files into DB
  console.log(req.files);
  try {
    const workflow = await setWorkflow({
      status,
      assignedTask,
      note: comment,
      submitUser: req.userId,
    });
    await saveDocumentInfo(req.files, { WorkflowId: workflow.id });
    return res.json(workflow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
