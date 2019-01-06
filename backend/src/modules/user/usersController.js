import { User, Group, AssignedTask } from '../../models';
import { stripPassword } from '../../services/password/stripPassword';
import { updateUserGroupsAndAssignTasks } from '../assign/assignUserToGroup';

const findUserById = userId =>
  User.findByPk(userId, {
    include: [Group, AssignedTask],
  });

export const getUserByEmail = async email => {
  const user = User.findOne({ where: { email } });
  return user;
};

export const userController = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers.map(stripPassword));
  } catch (err) {
    
    return res.status(500).json(err);
  }
};

export const userDetailController = async (req, res) => {
  try {
    const { id } = req.params;
    const userById = await findUserById(id);
    if (!userById) {
      return res.status(404).json({ msg: 'This user does not exist' });
    }
    return res.json(stripPassword(userById));
  } catch (err) {
    
    return res.status(500).json(err);
  }
};

export const userUpdateController = async (req, res) => {
  const { name, surname, email, role, groups } = req.body;
  const { UserId } = req.params;
  try {
    if (!UserId || !name || !surname || !email) {
      return res.status(400).json({ msg: 'Provide all user attributes' });
    }
    const oldUser = await findUserById(UserId);
    if (email !== oldUser.email) {
      const someoneElseWithSameEmail = await getUserByEmail(email);
      if (someoneElseWithSameEmail) {
        return res
          .status(404)
          .json({ msg: `User with email "${email}" already exists.` });
      }
    }
    await User.update(
      {
        name,
        surname,
        email,
        role,
      },
      {
        where: {
          id: UserId,
        },
      }
    );
    await updateUserGroupsAndAssignTasks(UserId, groups);
    const userUpdated = await findUserById(UserId);
    return res.status(200).json(stripPassword(userUpdated));
  } catch (err) {
    
    if (err.status) {
      return res.status(err.status).json({ msg: err.msg });
    }
    return res.status(500).json({ msg: 'Update User internal Error ' });
  }
};
