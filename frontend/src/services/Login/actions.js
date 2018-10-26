import { message } from 'antd';
import Cookies from 'js-cookie';
import history from '../../history';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export const setActiveUser = user => ({
  type: SET_ACTIVE_USER,
  user,
});

export const logIn = payload => async (dispatch, getState, { api }) => {
  const { email, emailEnding, password, rememberMe } = payload;
  const loader = message.loading('Logginig in...');
  try {
    const { data } = await api.post('auth/login', {
      email: `${email}${emailEnding}`,
      password,
      rememberMe,
    });
    const { token, user } = data;
    Cookies.set('auth-token', token);
    loader();
    dispatch(setActiveUser(user));
    message.success('Successfuly logged in', 2);
    history.push('/');
  } catch (err) {
    if (err.response) {
      const {
        data: { msg },
      } = err.response;
      await loader();
      message.error(msg, 2);
    }
    console.log(err);
  }
};

export const checkLoggedUser = () => async (dispatch, getState, { api }) => {
  try {
    const { data } = await api.get('auth/me');
    dispatch(setActiveUser(data));
  } catch (err) {
    console.log(err);
    history.push('/login');
  }
};
