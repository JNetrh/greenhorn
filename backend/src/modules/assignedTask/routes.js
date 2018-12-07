import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  listAssignedTasksController,
  getAssignedTaskByIdController,
} from './listAssignedTasks';

const router = expressAsyncAwait(Router());
router.get('/', listAssignedTasksController);
router.get('/:id', getAssignedTaskByIdController);

export default router;
