/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';

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
  ...UserRoutes,
  ...TaskRoutes,
];
