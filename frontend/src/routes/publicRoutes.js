import LoginPage from '../components/pages/Login';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';

export default [
  {
    Component: LoginPage,
    path: '/login',
  },
  {
    Component: ResetPasswordPage,
    path: '/password',
  },
];
