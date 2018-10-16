import { Router } from 'express';

import productRoutes from './modules/products/routes';

const router = Router();

router.use('/api/products', productRoutes);

export default router;
