import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  listAssignedTasksController,
  getAssignedTaskByIdController,
} from './listAssignedTasks';
import { listAssignedTaskForReview } from './listAssignedTaskForReview';

const router = expressAsyncAwait(Router());
router.get('/', listAssignedTasksController);
router.get('/review', listAssignedTaskForReview);
router.get('/:id', getAssignedTaskByIdController);

export default router;
