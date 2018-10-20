import HomePage from '../components/pages/HomePage';
import Kaja from '../components/pages/Kaja';
import AddUserPage from '../components/pages/AddUser';
export default {
  HomePage: {
    Component: HomePage,
    path: '/',
  },
  Kaja: {
    Component: Kaja,
    path: '/kaja',
  },
  AddEmployee: {
    Component: AddUserPage,
    path: '/adduser',
  },
};
