import { Task } from '../../models';

export const taskUpdateController = async (req, res) => {
  const { title, estimatedTime, severity, description } = req.body;
  const { id } = req.params;
  try {
    if (!title || !estimatedTime || !severity) {
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
        estimatedTime,
        severity,
        description,
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
