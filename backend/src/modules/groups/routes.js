import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  groupsController,
  groupDetailController,
  groupUpdateController,
  addGroupController,
  groupDeleteController,
} from './groupsController';

const router = expressAsyncAwait(Router());
router.get('/', groupsController);
router.get('/:id', groupDetailController);
router.post('/', addGroupController);
router.put('/:id', groupUpdateController);
router.delete('/:id', groupDeleteController);

export default router;
