import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import LoginController from './loginController';
import { verifyToken } from './tokenHandling';
import meController from './me';
import activateUserController from './activateUserController';
import { getUserByInvitationToken } from './getUserByInvitation';
import { passwordChangeController } from './passwordChangeController';
import ForgotPasswordController from './forgotPassword';
import { editMyAccountController } from './editMyAccountController';

const router = expressAsyncAwait(Router());
router.post('/login', LoginController);
router.post('/changepwd', verifyToken, passwordChangeController);

router.get('/me', verifyToken, meController);
router.put('/', verifyToken, editMyAccountController);
router.get('/byinvitation/:token', getUserByInvitationToken);
router.put('/activate/:token', activateUserController);
router.post('/forgotpwd', ForgotPasswordController);

export default router;
