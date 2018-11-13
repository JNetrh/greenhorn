import { User } from '../../models/';
import { createInvitation } from '../../services/invitation/invitationController';
import bcrypt from 'bcryptjs';
import { stripPassword } from '../../services/password/stripPassword';
import { addUserMail } from '../../services/mail/addUserMail';
// import { updateUserGroupsAndAssignTasks } from '../assign/assignUserToGroup';

export const ROLES = ['user', 'taskowner', 'hr'];

export const getUserByEmail = async email => {
  //TODO find in DB
  const user = User.findOne({ where: { email } });
  return user;
};

export const createUserWithHashedPwd = async ({
  password,
  // groups,
  ...user
}) => {
  const hashedPwd = await bcrypt.hash(password, 8);
  const createdUser = await User.create({
    ...user,
    password: hashedPwd,
    role: user.role || ROLES[0],
  });
  // await updateUserGroupsAndAssignTasks(createdUser.id, groups);
  return stripPassword(createdUser);
};

export const addUser = async user => {
  return new Promise(async (resolve, reject) => {
    const { name, surname, email, password } = user.body;
    try {
      if (!name || !surname || !email || !password) {
        reject({
          error: { msg: 'Please provide all mandatory fields.' },
          status: 400,
        });
      }
      const user = await getUserByEmail(email);
      if (user) {
        reject({
          error: { msg: `User with email "${email}" already exists.` },
          status: 400,
        });
      }

      const createdUser = await createUserWithHashedPwd({
        name,
        surname,
        email,
        password,
      });
      try {
        const invitationWithToken = await createInvitation(createdUser.id);
        console.log('invitationWithToken ', invitationWithToken);

        invitationSent = addUserMail(createdUser, invitationWithToken);
      } catch (err) {
        console.log(err);
        reject({ error, status: 500 });
      }

      resolve(createdUser);
    } catch (err) {
      console.log(err);
      reject({ error, status: 500 });
    }
  });
};

export const addUserController = async (req, res) => {
  addUser(req)
    .then(user => res.json(user))
    .catch(err => res.status(err.status).json(err.error));
};
