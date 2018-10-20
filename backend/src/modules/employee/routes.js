import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import addUserController from './addUserController';
import employeesController from './employeesController';

const router = expressAsyncAwait(Router());
router.get('/', employeesController);
router.post('/adduser', addUserController);

export default router;
