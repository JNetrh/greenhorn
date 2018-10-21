/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import AddUserPage from '../components/pages/AddUser';
import ListUsers from '../components/pages/ListUsers';

/* -- sider -- */
import EmployeesSider from '../components/organisms/sider/EmployeesSider';
export default {
  HomePage: {
    Component: HomePage,
    SideNavComponent: null,
    path: '/',
  },
  Kaja: {
    Component: Kaja,
    SideNavComponent: null,
    path: '/kaja',
  },
  AddUser: {
    Component: AddUserPage,
    SideNavComponent: EmployeesSider,
    path: '/users/add',
  },
  ListUser: {
    Component: ListUsers,
    SideNavComponent: EmployeesSider,
    path: '/users/list',
  },
};
