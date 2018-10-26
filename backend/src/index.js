import dotenv from 'dotenv';

import { app } from './server';
import models from './models';

import { setupLogging } from './logging';

dotenv.config();
const { PORT = 3030 } = process.env;

setupLogging();

// console.log(process.env);

models.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
  });
});
