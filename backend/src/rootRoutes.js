import { Router } from 'express';

import mail from './modules/mail/routes';

import authRoutes from './modules/auth/routes';
import user from './modules/user/routes';
import tasks from './modules/tasks/routes';
import groups from './modules/groups/routes';
import { verifyToken } from './modules/auth/tokenHandling';

const router = Router();
router.use('/api/mail', mail);
router.use('/api/auth', authRoutes);

router.use('*', verifyToken);
router.use('/api/task', tasks);
router.use('/api/user', user);
router.use('/api/group', groups);

export default router;
