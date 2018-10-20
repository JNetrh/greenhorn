import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';

const router = expressAsyncAwait(Router());
router.post('/adduser', addUserController);

export default router;
