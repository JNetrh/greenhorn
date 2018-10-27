import { message } from 'antd';
import Cookies from 'js-cookie';
import history from '../../history';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export const setActiveUser = user => ({
  type: SET_ACTIVE_USER,
  user,
});

export const logOut = () => {
  Cookies.remove('auth-token');
  message.success('Successfuly logged out', 2);
  history.push('/login');
};
