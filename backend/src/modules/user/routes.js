import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import deleteUserController from './deleteUserController';
import { changeUserPwd } from './changePwdController';
import { verifyToken } from './../auth/tokenHandling';
import { userController } from './usersController';
import { userDetailController } from './usersController';

const router = expressAsyncAwait(Router());
router.get('/', userController);
router.get('/:id', userDetailController);
router.post('/', addUserController);
router.delete('/:id', deleteUserController);
router.post('/changepwd', verifyToken, changeUserPwd);

export default router;
