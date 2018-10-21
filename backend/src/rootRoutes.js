import { Router } from 'express';

import productRoutes from './modules/products/routes';
import authRoutes from './modules/auth/routes';
import user from './modules/user/routes';
import tasks from './modules/tasks/routes';

const router = Router();
router.use('/api/products', productRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/user', user);
router.use('/api/tasks', user);

export default router;
