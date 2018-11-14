import { User, Group } from '../../models';
import { stripPassword } from '../../services/password/stripPassword';

const meController = async (req, res) => {
  try {
    const user = await User.findById(req.userId, { include: [Group] });
    return res.json(stripPassword(user));
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

export default meController;
