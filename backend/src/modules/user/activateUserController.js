import { Invitation, User } from '../../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


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
    return stripPassword(activatedUser);
  };
  
  const activateUserController = async (req, res) => {   
  const { password, passwordRepeat } = req.body;
  const { token } = req.params;
  const verified = jwt.verify(token, process.env.SECRET);

  if (!verified) {
    res.status(401).json({ msg: 'Token not valid' });
  }
  const invitation = await Invitation.findById(verified.invitationId, {
    include: [User],
  });
  if (!invitation) {
    res.status(404).json({ msg: 'This invitation does not exist.' });
  }
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
        const hashedPwd = await bcrypt.hash(password, 8);
        const activatedUser = await User.update({
          password: hashedPwd,  
        }, 
        {where: {
          id: invitation.UserId,
        },}
      );
      return res.json('Bombs away');
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Activate User internal Error ' });
    }
  };
  
  export default activateUserController;