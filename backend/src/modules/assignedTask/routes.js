import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  listAssignedTasksController,
  listAssignedTaskByIdController,
} from './listAssignedTasks';

const router = expressAsyncAwait(Router());
router.get('/', listAssignedTasksController);
router.get('/:id', listAssignedTaskByIdController);

export default router;
