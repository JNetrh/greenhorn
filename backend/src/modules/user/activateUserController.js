import { Invitation, User } from '../../models';
import loginController from '../auth/loginController';
import bcrypt from 'bcryptjs';

export const getUserByEmail = async email => {
    //TODO find in DB
    const user = User.findOne({ where: { email } });
    return user;
  };

  export const stripPassword = user => {
    const { password, ...rest } = user.toJSON();
    return rest;
  };

  export const activateUserWithHashedPwd = async ({ password, ...user }) => {
    const hashedPwd = await bcrypt.hash(password, 8);
    const acivatedUser = await User.update({
      ...user,
      password: hashedPwd,
      where: {
        id: invitation.UserId,
      },
    });
    return stripPassword(acivatedUser);
  };
  
  const activateUserController = async (req, res) => {
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
  
      const acivatedUser = await activateUserWithHashedPwd({
        password
      });

  
      await activateUser(acivatedUser.id);     
      loginController (password, email);
  

    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Activate User internal Error ' });
    }
  };
  
  export default activateUserController;