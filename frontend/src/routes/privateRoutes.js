/* -- page content -- */
import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import AddUserPage from '../components/pages/AddUser';
import ListEmployees from '../components/pages/ListEmployees';

/* -- sider -- */
import EmployeesSider from '../components/organisms/sider/EmployeesSider';
export default {
  HomePage: {
    Component: HomePage,
    SideNavComponent: EmployeesSider,
    path: '/',
  },
  Kaja: {
    Component: Kaja,
    SideNavComponent: EmployeesSider,
    path: '/kaja',
  },
  AddEmployee: {
    Component: AddUserPage,
    SideNavComponent: EmployeesSider,
    path: '/adduser',
  },
  ListEmployee: {
    Component: ListEmployees,
    SideNavComponent: EmployeesSider,
    path: '/employees/list',
  },
};
