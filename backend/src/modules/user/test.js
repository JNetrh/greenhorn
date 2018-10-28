import { User } from '../../models';
import loginController from '../auth/loginController';
import bcrypt from 'bcryptjs';
import { connect } from 'tls';


  export const activateUserWithHashedPwd = async ({ password, ...user }) => {
    const hashedPwd = await bcrypt.hash(password, 8);
    const acivatedUser = await User.create({
      ...user,
      password: hashedPwd,
    });
    return stripPassword(acivatedUser);
  };
  
  const test = async (req, res) => {
    const { password, passwordRepeat } = req.body;
    try {
      if (password !== passwordRepeat) {
        return res
          .status(400)
          .json({ msg: 'Password and repeated password do not match.' });
      }
      else if (!password || !passwordRepeat) {
        return res
          .status(400)
          .json({ msg: 'Please enter both password and password repeated' });
      }
  
      connect 
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };
  
  export default test;