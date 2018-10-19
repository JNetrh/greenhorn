import { Router } from 'express';

import productRoutes from './modules/products/routes';
import authRoutes from './modules/auth/routes';

const router = Router();

router.use('/api/products', productRoutes);
router.use('/api/auth', authRoutes);

export default router;
