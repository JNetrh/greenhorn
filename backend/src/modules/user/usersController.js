import { User } from '../../models';
import { stripPassword } from '../user/addUserController';

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

}

