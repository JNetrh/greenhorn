import { User } from '../../models/';

export const getUserByEmail = async email => {
  //TODO find in DB
  const user = User.findOne({ where: { email } });
  return user;
};

export const deleteUser = async email => {
  const deleted = await User.destroy({ where: { email: email } });
  return deleted;
};

const deleteUserController = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `User with email "${email}" does not exists.` });
    }
    console.log(user);
    const deletedUser = await deleteUser(email);

    return res.json(deletedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default deleteUserController;
