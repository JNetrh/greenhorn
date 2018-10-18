import LoginPage from '../components/pages/LoginPage';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
export default {
  Home: {
    Component: LoginPage,
    path: '/login',
  },
  Contact: {
    Component: ResetPasswordPage,
    path: '/password',
  },
};
