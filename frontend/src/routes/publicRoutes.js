import LoginPage from '../components/pages/Login';
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
