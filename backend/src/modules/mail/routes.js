import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { mailController } from './mailController';

const router = expressAsyncAwait(Router());
router.get('/', mailController);

export default router;
