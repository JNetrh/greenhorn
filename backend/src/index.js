import dotenv from 'dotenv';

import { app } from './server';
import initDb from './initDb';

import { setupLogging } from './logging';
import { CronJob } from './services/cron/jobs';
dotenv.config();
const { PORT = 3030 } = process.env;

setupLogging();

// console.log(process.env);

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
  });
});
