import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { listAssignedTasks } from './listAssignedTasks';

const router = expressAsyncAwait(Router());
router.get('/', listAssignedTasks);

export default router;
