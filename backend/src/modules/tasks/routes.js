import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';
import { verifyToken } from './../auth/tokenHandling';

import listTasksController from './listTasksController';
import addTasksController from './addTasksController';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.post('/', addTasksController);

export default router;
