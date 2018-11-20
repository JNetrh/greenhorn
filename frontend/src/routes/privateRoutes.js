/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import ChangePwd from '../components/pages/ChangePwd';
import MyAccount from '../components/pages/MyAccount';
import UserDetail from '../components/pages/UserDetail';
import TaskDetail from '../components/pages/TaskDetail';
import Submit from '../components/pages/Submit';

import UserRoutes, { UserRoutesSideNav } from './users';
import TaskRoutes, { TasksRoutesSideNav } from './tasks';
import GroupDetail from '../components/pages/GroupDetail';

export default [
  {
    Component: HomePage,
    path: '/',
  },
  {
    Component: Submit,
    path: '/submit/:id',
  },
  {
    Component: MyAccount,
    path: '/myaccount',
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
