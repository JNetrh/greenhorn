import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { addUserController } from './addUserController';
import { deleteUserController } from './deleteUserController';
import { userController } from './usersController';
import { userDetailController } from './usersController';
import { userUpdateController } from './usersController';
import { checkIfHr } from '../auth/checkIfHr';

const router = expressAsyncAwait(Router());
router.get('/', userController);
router.use('*', checkIfHr);
router.get('/:id', userDetailController);
router.post('/', addUserController);
//TODO: delete all tasks from assigned tasks and workflow for deleted user
router.delete('/:id', deleteUserController);
router.put('/:UserId', userUpdateController);

export default router;
