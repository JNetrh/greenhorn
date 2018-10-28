import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import usersController from './usersController';
import { getUserByInvitationToken } from './invitationController';
import activateUserController from './activateUserController';
import test from './test';

const router = expressAsyncAwait(Router());
router.get('/', usersController);
router.post('/', addUserController);
router.get('/byinvitation/:token', getUserByInvitationToken);

router.put('/activate',activateUserController);

router.get('/test',test);
router.put('/test',test);


export default router;
