import LoginPage from '../components/pages/Login';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
import Hello from '../components/pages/Hello';

export default [
  {
    Component: LoginPage,
    path: '/login',
  },
  {
    Component: ResetPasswordPage,
    path: '/password',
  },
  {
    Component: Hello,
    path: '/hello/:token',
  },
];
