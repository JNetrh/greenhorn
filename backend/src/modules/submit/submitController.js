import { setWorkflow } from '../../services/workflow/addWorkflow';
export const submitController = (req, res) => {
  const { id } = req;
  const entry = await setWorkflow({ ...req.body, submitUser: id });
  return res.json(entry)
};
