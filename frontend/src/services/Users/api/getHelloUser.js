import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const getHelloUser = invitationToken => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    const { data } = await api.get(`/auth/byinvitation/${invitationToken}`);
    return data;
  } catch (err) {
    if (err.response) {
      const error = getErrorMessage(err) || 'Token validation failed.';
      message.error(error, 2);
      return {
        error,
      };
    }
  }
};
