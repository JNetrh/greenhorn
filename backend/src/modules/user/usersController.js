import { User } from '../../models';
import { stripPassword } from '../user/addUserController';

export const getUserByEmail = async email => {
  const user = User.findOne({ where: { email } });
  return user;
};

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
  const { id, name, surname, email } = req.body;
  const { UserId } = req.params;
  try {
  if ( !id || !name || !surname || !email) {
    return res
      .status(400)
      .json({ msg: 'Provide all user attributes' });
  }
  const user = await User.findById(UserId);
  const emailIsNotUniqe = await getUserByEmail(email);
    if (emailIsNotUniqe) {
      return res
        .status(404)
        .json({ msg: `User with email ->${email}<- allready exists.` });
    }
  await User.update(
    {
      name,
      surname,
      email,
    },
    {
      where: {
        id: user.id,
      },
    }
  );
  const userUpdated = await User.findById(UserId);
  return res.status(200).json({userUpdated: stripPassword(userUpdated)});
 } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Update User internal Error ' });
  } 
}

