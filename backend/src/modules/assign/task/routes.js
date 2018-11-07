import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { assignTaskToGroup } from './assignTaskToGroup';

const router = expressAsyncAwait(Router());
router.post('/', assignTaskToGroup);

export default router;
