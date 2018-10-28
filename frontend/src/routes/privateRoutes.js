/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import ChangePwd from '../components/pages/ChangePwd';

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
    path: '/ChangePwd',
  },
  ...UserRoutes,
  ...TaskRoutes,
];
