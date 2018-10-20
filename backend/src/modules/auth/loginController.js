const { getToken } = require('./tokenHandling');
// const bcrypt = require('bcryptjs');
import { USERS } from './mockUsers';

const getUserByEmail = async email => {
  //TODO find in DB
  const user = USERS.find(user => user.email === email);
  return user;
};

const LoginController = async (req, res) => {
  console.log(req.body);
  const { email, password, rememberMe } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: 'Please provide both email and password.' });
  }
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ msg: `No user with the email: ${email}` });
    }

    // if (!user.isActive) {
    //   return res.status(401).json({ msg: 'This account is disabled.' });
    // }
    console.log(process.env.SECRET);

    //TODO check password
    // const verified = await bcrypt.compare(password, user.pwd);
    const verified = true;

    if (!verified) {
      return res.status(400).json({ msg: 'Bad password' });
    }

    const token = getToken(user.id, rememberMe ? '7d' : undefined);

    return res.json({
      user,
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default LoginController;
