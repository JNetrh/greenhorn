import { User } from '../../models/';

export const getUserById = async id => {
  //TODO find in DB
  const user = User.findOne({ where: { id } });
  return user;
};

export const deleteTasksById = async id => {
  const deleted = await Task.destroy({ where: { id: id } });
  return deleted;
};

const deleteTasksController = async (req, res) => {
  const { id } = req.params;
  console.log('id:', id);
  try {
    if (!id) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }
    const user = await getTasksById(id);
    if (!task) {
      return res
        .status(404)
        .json({ msg: `Task with id "${id}" does not exists.` });
    }
    const deletedTasks = await deleteTasksById(id);

    return res.json(deletedTasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default deleteTasksController;
