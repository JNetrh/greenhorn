import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';
import { verifyToken } from './../auth/tokenHandling';

import { listTasksController } from './tasksController';
import { taskDetailController } from './tasksController';
import deleteTaskController from './deleteTaskController';
import addTasksController from './addTasksController';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.get('/:id', taskDetailController);
router.delete('/:id', deleteTaskController);
router.post('/', addTasksController);

export default router;
