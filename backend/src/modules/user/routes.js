import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import deleteUserController from './deleteUserController';
import { userController } from './usersController';
import { userDetailController } from './usersController';
import { userUpdateController } from './usersController';

const router = expressAsyncAwait(Router());
router.get('/', userController);
router.get('/:id', userDetailController);
router.post('/', addUserController);
router.delete('/:id', deleteUserController);
router.put('/:UserId', userUpdateController);

export default router;
