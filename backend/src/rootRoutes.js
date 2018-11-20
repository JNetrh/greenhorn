import { Router } from 'express';

import authRoutes from './modules/auth/routes';
import user from './modules/user/routes';
import tasks from './modules/tasks/routes';
import groups from './modules/groups/routes';
import assignedTask from './modules/assignedTask/routes';
import { verifyToken } from './modules/auth/tokenHandling';
import { checkIfHr } from './modules/auth/checkIfHr';

const router = Router();
router.use('/api/auth', authRoutes);

router.use('*', verifyToken);
router.use('/api/task', tasks);
router.use('/api/assignedTask', assignedTask);

router.use('*', checkIfHr);
router.use('/api/user', user);
router.use('/api/group', groups);

export default router;
