import { Invitation, User } from '../../models';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { stripPassword } from '../user/addUserController';
import { getToken } from './tokenHandling';

const activateUserController = async (req, res) => {
  const { password, passwordRepeat } = req.body;

  const { token } = req.params;
  try {
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

    if (password !== passwordRepeat) {
      return res
        .status(400)
        .json({ msg: 'Password and repeated password do not match.' });
    } else if (!password || !passwordRepeat) {
      return res
        .status(400)
        .json({ msg: 'Please enter both password and password repeated' });
    }
    const hashedPwd = await bcrypt.hash(password, 8);
    await User.update(
      {
        password: hashedPwd,
      },
      {
        where: {
          id: invitation.UserId,
        },
      }
    );
    const activatedUser = await User.findById(invitation.UserId);
    const authToken = getToken({
      userId: activatedUser.id,
      role: activatedUser.role,
    });
    return res.json({ user: stripPassword(activatedUser), token: authToken });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: 'Activate User internal Error ' });
  }
};

export default activateUserController;
