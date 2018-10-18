import LoginPage from '../components/pages/LoginPage';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
export default {
  Home: {
    component: LoginPage,
    path: '/login',
  },
  Contact: {
    component: ResetPasswordPage,
    path: '/resetpassword',
  },
};
