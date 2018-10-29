import { User } from '../../models';

import bcrypt from 'bcryptjs';

export const changeUserPwd = async (req, res) => {
  const { currentPassword, newPassword, newPasswordCheck } = req.body;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.status(404).json({ msg: `user not found!` });
    }
    const verified = await bcrypt.compare(currentPassword, user.password);
    if (!verified) {
      res.status(400).json({ msg: 'Current password do not match' });
    }
    if (newPassword != newPasswordCheck) {
      res.status(400).json({ msg: 'Your new password seems to be incorrect' });
    }

    const hashedPwd = await bcrypt.hash(newPassword, 8);

    await User.update(
      {
        password: hashedPwd,
      },
      {
        where: {
          id: req.userId,
        },
      }
    );
    res.status(200).json({ msg: `Password changed` });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
