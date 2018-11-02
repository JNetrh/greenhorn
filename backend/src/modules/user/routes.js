import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import deleteUserController from './deleteUserController';
import usersController from './usersController';
import { changeUserPwd } from './changePwdController';
import { verifyToken } from './../auth/tokenHandling';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.post('/', addUserController);
router.delete('/', deleteUserController);
router.post('/changepwd', verifyToken, changeUserPwd);

export default router;
