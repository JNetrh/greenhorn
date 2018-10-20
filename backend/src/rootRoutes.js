import { Router } from 'express';

import productRoutes from './modules/products/routes';
import authRoutes from './modules/auth/routes';
import user from './modules/user/routes';

const router = Router();
router.use('/api/products', productRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/user', user);

export default router;
