import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { upload } from '../../services/upload/uploadDocuments';

import { submitController } from './submitController';
import { doneController } from './doneController';
import { returnController } from './returnController';

const router = expressAsyncAwait(Router());
router.post('/', upload, submitController);
router.post('/:done', returnController);
router.post('/:returned', doneController);

export default router;
