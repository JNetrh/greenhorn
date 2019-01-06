import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const ChangePwdUser = ({
  currentPassword,
  newPassword,
  newPasswordCheck,
}) => async (dispatch, getState, { api }) => {
  const loader = message.loading('Changing user password');
  try {
    await api.post('/auth/changepwd', {
      currentPassword,
      newPassword,
      newPasswordCheck,
    });
    loader();
    message.success('User password changed', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
  }
};
