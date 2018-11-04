/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import ChangePwd from '../components/pages/ChangePwd';
import UserDetail from '../components/pages/UserDetail';
import TaskDetail from '../components/pages/TaskDetail';

import UserRoutes from './users';
import TaskRoutes from './tasks';

export default [
  {
    Component: HomePage,
    path: '/',
  },
  {
    Component: Kaja,
    path: '/kaja',
  },
  {
    Component: ChangePwd,
    path: '/changepassword',
  },
  {
    Component: UserDetail,
    path: '/user/:id',
  },
  {
    Component: TaskDetail,
    path: '/task/:id',
  },
  ...UserRoutes,
  ...TaskRoutes,
];
