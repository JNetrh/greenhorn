import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { assignUserToGroup } from './assignUserToGroup';

const router = expressAsyncAwait(Router());
router.post('/', assignUserToGroup);

export default router;
