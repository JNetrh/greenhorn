import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addGroupController from './addGroupController';

const router = expressAsyncAwait(Router());
router.post('/add', addGroupController);

export default router;
