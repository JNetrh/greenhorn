import { message } from 'antd';
import Cookies from 'js-cookie';
import history from '../../history';

export const logOut = () => {
  Cookies.remove('auth-token');
  message.success('Successfuly logged out', 2);
  history.push('/login');
};
