import { Router } from 'express';

import productRoutes from './modules/products/routes';
import authRoutes from './modules/auth/routes';
import employee from './modules/employee/routes';

const router = Router();
router.use('/api/products', productRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/employee', employee);

export default router;
