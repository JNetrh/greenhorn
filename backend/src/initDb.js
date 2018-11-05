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
  // models.sequelize.afterSync(e => console.log('E:', e));
  await models.sequelize.sync();

  console.log(
    'Synced models:',
    Object.keys(models.sequelize.models).join(', ')
  );

  const user = await getUserByEmail(TEST_USER.email);
  if (!user) {
    await createUserWithHashedPwd(TEST_USER);
    console.log('Created a test user.');
  }

  models.sequelize.options.logging = console.log;
};

export default initDb;
