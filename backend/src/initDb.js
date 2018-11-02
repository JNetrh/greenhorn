import models from './models';
import {
  createUserWithHashedPwd,
  getUserByEmail,
  ROLES,
} from './modules/user/addUserController';

const TEST_USER = {
  name: 'John',
  surname: 'Doe',
  email: 'test@cngroup.dk',
  password: 'test',
  role: ROLES[2],
};

const initDb = async () => {
  await models.sequelize.sync();

  //create user
  const user = await getUserByEmail(TEST_USER.email);
  if (!user) {
    await createUserWithHashedPwd(TEST_USER);
  }
};

export default initDb;
