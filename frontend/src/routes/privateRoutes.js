/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';

import UserRoutes from './users';
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
];
