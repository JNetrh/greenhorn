import { USERS } from '../auth/mockUsers';

const userController = async (req, res) => {
  try {
    return res.json(USERS);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default userController;
