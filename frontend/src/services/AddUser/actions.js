import { message } from 'antd';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export const setActiveUser = user => ({
  type: SET_ACTIVE_USER,
  user,
});

export const AddUser = payload => async (dispatch, getState, { api }) => {
  const { email, emailEnding, password, rememberMe } = payload;
  const loader = message.loading('Logginig in...');
  try {
    const { data } = await api.post('auth/login', {
      email: `${email}${emailEnding}`,
      password,
      rememberMe,
    });
    //TODO handle token on frontend
    const { token, user } = data;
    loader();
    dispatch(setActiveUser(user));
    message.success('Successfuly user add', 2);
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
