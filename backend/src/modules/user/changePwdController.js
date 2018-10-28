import { User } from '../../models';
import bcrypt from 'bcryptjs';
export const getUserByEmail = async email => {
  //TODO find in DB
  const user = User.findOne({ where: { email } });
  return user;
};

export const changeUserPwd = async (req, res) => {
  const { currentPassword, newPassword, newPasswordCheck } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (user) {
      // TO DO
    }

    if (currentPassword != user.password) {
      res.status(400).json({ msg: 'Current password do not match' });
    }
    if (newPassword != newPasswordCheck) {
      res.status(400).json({ msg: 'Your new password seems to be incorrect' });
    }
    if (newPassword == currentPassword) {
      res.status(400).json({ msg: 'Your new password is same as old one!' });
    }
    const hashedPwd = await bcrypt.hash(newPassword, 8);
    res.json({ msg: `Password changed` });
    await User.update(
      {
        password: hashedPwd,
      },
      {
        where: {
          id: User.UserId,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
