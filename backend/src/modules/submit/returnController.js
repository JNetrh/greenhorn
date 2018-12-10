import { setWorkflow } from '../../services/workflow/addWorkflow';

export const returnController = async (req, res) => {
  const { status, assignedTaskId, comment } = req.body;

  try {
    const workflow = await setWorkflow({
      status,
      assignedTask: assignedTaskId,
      note: comment,
      submitUser: req.userId,
    });
    return res.json(workflow);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
