import models from './models';
import { TaskStatus } from './models';
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

const TASK_STATUSES = [
  {
    id: 1,
    name: 'assigned',
  },
  {
    id: 2,
    name: 'submitted',
  },
  {
    id: 3,
    name: 'returned',
  },
  {
    id: 4,
    name: 'done',
  },
];

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
  const testStatus = await TaskStatus.findAll();
  if (testStatus.length === 0) {
    await TaskStatus.bulkCreate(TASK_STATUSES);
  }

  models.sequelize.options.logging = console.log;
};

export default initDb;
