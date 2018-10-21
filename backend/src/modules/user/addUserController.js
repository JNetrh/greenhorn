import { USERS } from '../auth/mockUsers';

const getUserByEmail = async email => {
  //TODO find in DB
  const user = USERS.find(user => user.email === email);
  return user;
};

const addUserController = async (req, res) => {
  console.log(req.body);
  const { name, surname, email } = req.body;
  try {
    if (!name || !surname || !email) {
      return res
        .status(400)
        .json({ msg: 'Please provide all mandatory parameter.' });
    }
    // const user = await getUserByEmail(email);
    // if (user) {
    //   return res.status(404).json({ msg: `User already exists: ${email}` });
    // }
    console.log(process.env.SECRET);
    return res.json({
      name,
      surname,
      email,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default addUserController;
