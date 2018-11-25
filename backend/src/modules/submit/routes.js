import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { submitController } from './submitController';

const router = expressAsyncAwait(Router());
router.post('/', submitController);

export default router;
