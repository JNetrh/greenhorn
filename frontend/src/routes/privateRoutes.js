import HomePage from '../components/pages/HomePage';
import AddUserPage from '../components/pages/AddUser/AddUserPage';
export default {
  Profile: {
    Component: HomePage,
    path: '/',
  },
  AddEmployee: {
    Component: AddUserPage,
    path: '/adduser',
  },
};
