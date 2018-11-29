import { setWorkflow } from '../../services/workflow/addWorkflow';

export const submitController = async (req, res) => {
  const { status, assignedTask, comment } = JSON.parse(req.body.data);
  //TODO: save files into DB
  console.log(req.files);
  try {
    const entry = await setWorkflow({
      status,
      assignedTask,
      note: comment,
      submitUser: req.userId,
    });
    return res.json(entry);
  } catch (error) {
    res.status(500).json({ msg: 'Submission unsuccesful' });
  }
};
