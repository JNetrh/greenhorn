import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  listAssignedTasksController,
  listAssignedTaskByIdController,
} from './listAssignedTasks';
import { listAssignedTaskForReview } from './listAssignedTaskForReview';

const router = expressAsyncAwait(Router());
router.get('/', listAssignedTasksController);
router.get('/review', listAssignedTaskForReview);
router.get('/:id', listAssignedTaskByIdController);

export default router;
