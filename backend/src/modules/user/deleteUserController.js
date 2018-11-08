import { User } from '../../models/';

export const getUserById = async id => {
  //TODO find in DB
  const user = User.findOne({ where: { id } });
  return user;
};

export const deleteUserById = async id => {
  const deleted = await User.destroy({ where: { id: id } });
  return deleted;
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }
    const user = await getUserById(id);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `User with id "${id}" does not exists.` });
    }
    await deleteUserById(id);

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
