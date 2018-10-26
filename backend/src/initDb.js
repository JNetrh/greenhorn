import models from './models';
import { createUserWithHashedPwd } from './modules/user/addUserController';

const TEST_USER = {
  name: 'John',
  surname: 'Doe',
  email: 'test@cngroup.dk',
  password: 'test',
};

const initDb = async () => {
  await models.sequelize.sync();
  await createUserWithHashedPwd(TEST_USER);
};

export default initDb;
