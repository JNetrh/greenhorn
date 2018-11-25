import { setWorkflow } from '../../services/workflow/addWorkflow';
export const submitController = async (req, res) => {
  console.log(req.userId);
  console.log(req.body);
  const entry = await setWorkflow({
    ...req.body.data,
    note: req.body.data.comment,
    submitUser: req.userId,
  });
  return res.json(entry);
};
