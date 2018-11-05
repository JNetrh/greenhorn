import { addUser } from './addUserController';

export const addUserWithGroupsController = async (req, res) => {
  try {
    const user = await addUser(req);
  } catch (error) {
    res.status(error.status).json(error.error);
  }
};
