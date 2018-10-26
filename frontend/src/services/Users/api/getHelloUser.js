import { message } from 'antd';

export const getHelloUser = invitationToken => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Loading user...');
  try {
    const { data } = await api.get(`/user/byinvitation/${invitationToken}`);
    loader();
    console.log(data);
    message.success('User loaded', 2);
    return data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      const {
        data: { msg },
      } = err.response;
      await loader();
      message.error(msg, 2);
      return {
        msg,
      };
    }
  }
};
