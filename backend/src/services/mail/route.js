import expressAsyncAwait from 'express-async-await';
import { Router } from 'express';

import { newEmailUser } from './newUserMail';

const router = expressAsyncAwait(Router());
router.post('/', newEmailUser);

export default router;
