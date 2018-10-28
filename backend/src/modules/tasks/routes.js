import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import listTasksController from './listTasksController';
import addTasksController from './addTasksController';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.post('/add', addTasksController);

export default router;
