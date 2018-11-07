import { message } from 'antd';
import Cookies from 'js-cookie';
import history from '../../history';
import getErrorMessage from '../../helpers/getErrorMessage';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export const setActiveUser = user => ({
  type: SET_ACTIVE_USER,
  user,
});

export const logIn = payload => async (dispatch, getState, { api }) => {
  const { email, password, rememberMe } = payload;
  const loader = message.loading('Logginig in...');
  try {
    const { data } = await api.post('auth/login', {
      email: `${email}`,
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
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};

export const logOut = () => dispatch => {
  Cookies.remove('auth-token');
  history.push('/login');
  dispatch(setActiveUser(null));
  // message.success('Successfuly logged out', 2);
};

export const submitHello = ({
  password,
  passwordRepeat,
  invitationToken,
}) => async (dispatch, getState, { api }) => {
  const loader = message.loading();
  try {
    const { data } = await api.put(`auth/activate/${invitationToken}`, {
      password,
      passwordRepeat,
    });
    const { user, token } = data;
    Cookies.set('auth-token', token);
    loader();
    dispatch(setActiveUser(user));
    message.success('Successfuly logged in', 2);
    history.push('/');
  } catch (err) {
    if (err.response) {
      await loader();
      message.error(getErrorMessage(err), 2);
    }
    console.log(err);
  }
};

export const checkLoggedUser = () => async (dispatch, getState, { api }) => {
  try {
    const {
      auth: { user },
    } = getState();
    if (!user) {
      const { data } = await api.get('auth/me');
      dispatch(setActiveUser(data));
    }
  } catch (err) {
    console.log(err);
    history.push('/login');
  }
};

export const forgotPassword = ({ email }) => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    const {
      data: { msg },
    } = await api.post('auth/forgotpwd', { email });
    message.success(msg, 4);
    return true;
    // dispatch(setActiveUser(data));
  } catch (err) {
    message.error(getErrorMessage(err), 2);
    // history.push('/login');
  }
};
