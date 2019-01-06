import dotenv from 'dotenv';

import { app } from './server';
import initDb from './initDb';

import { setupLogging } from './logging';
dotenv.config();
const { PORT = 3030 } = process.env;

setupLogging();

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}!`);
  });
});
