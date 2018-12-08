import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { listTasksController, isHrOrTaskOwner } from './tasksController';
import { taskDetailController } from './tasksController';
import deleteTaskController from './deleteTaskController';
import addTasksController from './addTasksController';
import { taskUpdateController } from './updateTaskController';
import { upload } from '../../services/upload/uploadDocuments';

const router = expressAsyncAwait(Router());
router.get('/', listTasksController);
router.get('/:id', taskDetailController);
router.use('*', isHrOrTaskOwner);
router.put('/:id', upload, taskUpdateController);
router.delete('/:id', deleteTaskController);
router.post('/', upload, addTasksController);

export default router;
