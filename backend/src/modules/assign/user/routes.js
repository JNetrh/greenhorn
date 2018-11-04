import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { assignUserToGroup } from './assignUserToGroup';
import { removeUserToGroup } from './removeUserToGroup';

const router = expressAsyncAwait(Router());
router.post('/', assignUserToGroup);
router.post('/remove', removeUserToGroup);

export default router;
