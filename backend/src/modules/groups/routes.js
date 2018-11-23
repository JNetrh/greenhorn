import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import {
  groupsController,
  groupDetailController,
  groupUpdateController,
  addGroupController,
  groupDeleteController,
} from './groupsController';
import { checkIfHr } from '../auth/checkIfHr';

const router = expressAsyncAwait(Router());
router.get('/', groupsController);
router.use('*', checkIfHr);
router.get('/:id', groupDetailController);
router.post('/', addGroupController);
router.put('/:id', groupUpdateController);
router.delete('/:id', groupDeleteController);

export default router;
