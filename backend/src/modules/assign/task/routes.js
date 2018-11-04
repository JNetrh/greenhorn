import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { assignTaskToGroup } from './assignTaskToGroup';
import { removeTaskToGroup } from './removeTaskToGroup';

const router = expressAsyncAwait(Router());
router.post('/', assignTaskToGroup);
router.post('/remove', removeTaskToGroup);

export default router;
