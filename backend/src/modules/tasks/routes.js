import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { listTasksController } from './tasksController';
import { taskDetailController } from './tasksController';
import deleteTaskController from './deleteTaskController';
import addTasksController from './addTasksController';
import { taskUpdateController } from './updateTaskController';
import { checkIfHr } from '../auth/checkIfHr';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.get('/:id', taskDetailController);
router.use('*', checkIfHr);
router.put('/:id', taskUpdateController);
router.delete('/:id', deleteTaskController);
router.post('/', addTasksController);

export default router;
