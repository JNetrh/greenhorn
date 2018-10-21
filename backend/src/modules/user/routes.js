import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import usersController from './usersController';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.post('/add', addUserController);

export default router;
