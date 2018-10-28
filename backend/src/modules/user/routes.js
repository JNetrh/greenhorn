import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import usersController from './usersController';
import { getUserByInvitationToken } from './invitationController';
import { changeUserPwd } from './changePwdController';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.post('/', addUserController);
router.get('/byinvitation/:token', getUserByInvitationToken);
router.post('/changepwd/', changeUserPwd);

export default router;
