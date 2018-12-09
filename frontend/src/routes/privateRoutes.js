/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import ChangePwd from '../components/pages/ChangePwd';
import MyAccount from '../components/pages/MyAccount';
import UserDetail from '../components/pages/UserDetail';
import TaskDetail from '../components/pages/TaskDetail';
import Submit from '../components/pages/Submit';
import ReviewTask from '../components/pages/ReviewTask';

import UserRoutes, { UserRoutesSideNav } from './users';
import GroupsRoutes, { GroupsRoutesSideNav } from './groups';
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
    path: '/me',
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
  ...GroupsRoutes,
  {
    Component: GroupDetail,
    path: '/group/:id',
    SideNav: GroupsRoutesSideNav,
  },
  ...TaskRoutes,
  {
    Component: TaskDetail,
    path: '/task/:id',
    SideNav: TasksRoutesSideNav,
  },
  {
    Component: ReviewTask,
    path: '/taskreview',
  },
];
