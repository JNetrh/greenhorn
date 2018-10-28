import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import usersController from './usersController';
import { getUserByInvitationToken } from './invitationController';
import { changeUserPwd } from './changePwdController';
import { verifyToken } from './../auth/tokenHandling';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.post('/', addUserController);
router.get('/byinvitation/:token', getUserByInvitationToken);
router.post('/changepwd/', verifyToken, changeUserPwd);

export default router;
