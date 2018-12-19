import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { upload } from '../../services/upload/uploadDocuments';

import { submitController } from './submitController';
import { ownerActionController } from './ownerActionController';

const router = expressAsyncAwait(Router());
router.post('/', upload, submitController);
router.post('/:done', ownerActionController);
router.post('/:returned', ownerActionController);

export default router;
