import { User, Group } from '../../../models';

export const removeUserToGroup = async (req, res) => {
  const { userId, groupIds } = req.body;

  try {
    if (!Array.isArray(groupIds)) {
      return res.status(400).json({ msg: 'group has to be an array' });
    }

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ msg: 'user not found' });
    }

    const groups = await Group.findAll({ where: { id: groupIds } });

    await user.removeGroups(groups);

    const assignedGroups = await User.findByPk(userId, {
      include: [Group],
    });

    return res.json(assignedGroups);
  } catch (error) {
    return res.status(500).json(error);
  }
};
