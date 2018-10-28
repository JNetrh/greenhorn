import { message } from 'antd';
import { changePwdUser } from '../actions';

export const ChangePwdUser = ({
  currentPassword,
  newPassword,
  newPasswordCheck,
}) => async (dispatch, getState, { api }) => {
  const loader = message.loading('Changing user password');
  console.log(currentPassword, newPassword, newPasswordCheck);
  try {
    const { data } = await api.post('/user/changepwd/', {
      currentPassword,
      newPassword,
      newPasswordCheck,
    });
    loader();

    dispatch(changePwdUser(data));
    message.success('User password changed', 2);
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
