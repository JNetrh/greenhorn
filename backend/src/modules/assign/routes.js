import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import asignTaskController from './task/routes';
import asignUserController from './user/routes';

const router = expressAsyncAwait(Router());

router.use('/task', asignTaskController);
router.use('/user', asignUserController);

export default router;
