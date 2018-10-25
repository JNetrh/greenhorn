import LoginPage from '../components/pages/Login';
import ResetPasswordPage from '../components/pages/ResetPasswordPage';
import HelloPage from '../components/pages/HelloPage';
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
    Component: HelloPage,
    path: '/hello',
  },
  {
    Component: EmailTemplate,
    path: '/email',
  },
];
