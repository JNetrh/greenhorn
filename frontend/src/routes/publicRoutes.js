import LoginPage from '../components/pages/Login';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
export default {
  Login: {
    Component: LoginPage,
    path: '/login',
  },
  Password: {
    Component: ResetPasswordPage,
    path: '/password',
  },
};
