import { User } from '../../models';
import { stripPassword } from '../user/addUserController';
import bcrypt from 'bcryptjs';

export const userController = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export const userDetailController = async(req, res) =>{
  try {
    const { id } = req.params;
    const userById = await User.findById(id);
    if (!userById) {
      res.status(404).json({ msg: 'This user does not exist' });
    }
    return res.json(stripPassword(userById));
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }

};

export const userUpdateController = async(req, res) =>{
  const { id, name, surname, email, createdAt, updatedAt, RoleId, Password } = req.body;
  const { UserId } = req.params;
  try {
  if ( !id || !name || !surname || !email || !createdAt || !updatedAt || !RoleId|| !Password) {
    return res
      .status(400)
      .json({ msg: 'Provide all user attributes' });
  }
  const user = await User.findById(UserId);
  const hashedPwd = await bcrypt.hash(Password, 8);
  await User.update(
    {
      Password: hashedPwd,
      name,
      surname,
      email,
      createdAt,
      updatedAt,
    },
    {
      where: {
        id: user.id,
      },
    }
  );
  return res.json({user: stripPassword(user)});
 } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Update User internal Error ' });
  } 
}

