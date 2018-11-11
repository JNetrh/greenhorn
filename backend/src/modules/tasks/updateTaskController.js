import { Task } from '../../models';

export const taskUpdateController = async (req, res) => {
  const { title, description, estimatedTime, severity} = req.body;
  const { id } = req.params;
  try {
    if (!title || !description || !estimatedTime || !severity) {
      return res
        .status(400)
        .json({ msg: 'Please provide all required attributes' });
    }
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: 'This task does not exist' });
    }
    await Task.update(
      {
        title,
        description,
        estimatedTime,
        severity,
      },
      {
        where: {
          id,
        },
      }
    );
    const updated = await Task.findById(id);
    return res.status(200).json(updated);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Update task failed' });
  }
};
