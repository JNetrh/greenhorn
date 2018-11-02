import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';
import { verifyToken } from './../auth/tokenHandling';


import listTasksController from './listTasksController';
import addTasksController from './addTasksController';
import deleteTasksController from './deleteTasksController';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.post('/add', verifyToken, addTasksController);
router.delete('/:id', deleteTasksController);

export default router;
