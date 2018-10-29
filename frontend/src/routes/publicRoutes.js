import LoginPage from '../components/pages/Login';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
import Hello from '../components/pages/Hello';
import EmailTemplate from '../components/pages/EmailTemplate';

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
  {
    Component: EmailTemplate,
    path: '/email',
  },
];
