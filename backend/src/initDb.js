import models from './models';
import {
  createUserWithHashedPwd,
  getUserByEmail,
} from './modules/user/addUserController';

const TEST_USER = {
  name: 'John',
  surname: 'Doe',
  email: 'test@cngroup.dk',
  password: 'test',
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
