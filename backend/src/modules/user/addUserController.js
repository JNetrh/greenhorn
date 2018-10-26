import { User } from '../../models/';
import { createInvitation } from './InvitationController';
import bcrypt from 'bcryptjs';

export const getUserByEmail = async email => {
  //TODO find in DB
  const user = User.findOne({ where: { email } });
  return user;
};

export const stripPassword = user => {
  const { password, ...rest } = user.toJSON();
  return rest;
};

const addUserController = async (req, res) => {
  const { name, surname, email, password } = req.body;
  try {
    if (!name || !surname || !email || !password) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory fields.' });
    }
    const user = await getUserByEmail(email);
    if (user) {
      return res
        .status(404)
        .json({ msg: `User with email "${email}" already exists.` });
    }

    const hashedPwd = await bcrypt.hash(password, 8);

    const createdUser = await User.create({
      name,
      surname,
      email,
      password: hashedPwd,
    });

    await createInvitation(createdUser.id);

    return res.json(stripPassword(createdUser));
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addUserController;
