import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import LoginController from './loginController';
import { verifyToken } from './tokenHandling';
import meController from './me';

const router = expressAsyncAwait(Router());
router.post('/login', LoginController);
router.get('/me', verifyToken, meController);

export default router;
