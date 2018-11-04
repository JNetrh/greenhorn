import { User, Group } from '../../../models';
import { read } from 'fs';

const setUserToGroup = async (user, groups) => {
  console.log(Group.prototype);
  // return Object.keys(User.Instance.prototype);
  // console.log('groups:', groups);
  // return await User.prototype.setGroups(groups);
  return await groups[0].addUser(user);
};

const findGroupsById = async groupIds => {
  return await Group.findAll({
    where: {
      id: groupIds,
    },
  });
};

export const assignUserToGroup = async (req, res) => {
  const { userId, groupIds } = req.body;
  console.log('groupIDs: ', groupIds);

  if (!Array.isArray(groupIds)) {
    return res.status(400).json({ msg: 'group ids needs to be an array' });
  }

  const user = User.findByPk(userId);

  if (!user) {
    return res.status(400).json({ msg: 'User not found' });
  }

  const groups = await findGroupsById(groupIds);

  const assignedGroups = await setUserToGroup(user, groupIds);

  res.json(assignedGroups);
};
