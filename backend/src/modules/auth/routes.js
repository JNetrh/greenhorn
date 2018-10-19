import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import LoginController from './loginController';

const router = expressAsyncAwait(Router());
router.post('/login', LoginController);

export default router;
