import bcrypt from 'bcryptjs';
import { getUserByEmail, stripPassword } from '../user/addUserController';
import { getToken } from './tokenHandling';

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

    const verified = await bcrypt.compare(password, user.password);

    if (!verified) {
      return res.status(400).json({ msg: 'Bad password' });
    }

    const token = getToken(user.id, rememberMe ? '7d' : undefined);

    return res.json({
      user: stripPassword(user),
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default LoginController;
