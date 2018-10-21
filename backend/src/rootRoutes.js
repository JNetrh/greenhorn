import { Router } from 'express';

import mail from './modules/mail/routes';

import productRoutes from './modules/products/routes';
import authRoutes from './modules/auth/routes';
import user from './modules/user/routes';
import tasks from './modules/tasks/routes';

const router = Router();
router.use('/api/mail', mail);

router.use('/api/products', productRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/user', user);
router.use('/api/tasks', tasks);

export default router;
