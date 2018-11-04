import { User, Group } from '../../../models';

const findGroupsById = async groupIds => {
  return await Group.findAll({
    where: {
      id: groupIds,
    },
  });
};

export const assignUserToGroup = async (req, res) => {
  const { userId, groupIds } = req.body;

  if (!Array.isArray(groupIds)) {
    return res.status(400).json({ msg: 'group ids needs to be an array' });
  }

  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }

  const groups = await findGroupsById(groupIds);

  if (!groups) {
    return res.status(400).json({ msg: 'Group not found' });
  }

  await user.addGroups(groups);

  const assignedGroups = await User.findByPk(userId, {
    include: [Group],
  });

  return res.json(assignedGroups);
};
