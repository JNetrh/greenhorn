import { message } from 'antd';

export const getHelloUser = invitationToken => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    const { data } = await api.get(`/auth/byinvitation/${invitationToken}`);
    return data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      const {
        data: { msg },
      } = err.response;
      const error = msg || 'Token validation failed.';
      message.error(error, 2);
      return {
        error,
      };
    }
  }
};
