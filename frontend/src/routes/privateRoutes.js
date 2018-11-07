/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import ChangePwd from '../components/pages/ChangePwd';
import UserDetail from '../components/pages/UserDetail';
import TaskDetail from '../components/pages/TaskDetail';

import UserRoutes, { UserRoutesSideNav } from './users';
import TaskRoutes, { TasksRoutesSideNav } from './tasks';
import GroupDetail from '../components/pages/GroupDetail';

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
  ...UserRoutes,
  {
    Component: UserDetail,
    path: '/user/:id',
    SideNav: UserRoutesSideNav,
  },
  {
    Component: GroupDetail,
    path: '/group/:id',
    SideNav: UserRoutesSideNav,
  },
  ...TaskRoutes,
  {
    Component: TaskDetail,
    path: '/task/:id',
    SideNav: TasksRoutesSideNav,
  },
];
