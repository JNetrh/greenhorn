import { User } from '../../models';
import { stripPassword } from '../user/addUserController';

const meController = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    return res.json(stripPassword(user));
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default meController;
