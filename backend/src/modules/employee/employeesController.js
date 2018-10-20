import { USERS } from '../auth/mockUsers';

const addUserController = async (req, res) => {
  try {
    setTimeout(() => {
      return res.json({
        USERS,
      });
    }, 3000);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addUserController;
