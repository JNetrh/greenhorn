import { User } from '../../models';

const userController = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default userController;
