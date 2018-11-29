import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { upload } from '../../services/upload/uploadDocuments';

import { submitController } from './submitController';

const router = expressAsyncAwait(Router());
router.post('/', upload, submitController);

export default router;
