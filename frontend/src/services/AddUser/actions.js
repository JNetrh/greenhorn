import { message } from 'antd';

export const ADD_USER = 'ADD_USER';

export const AddUser = payload => async (dispatch, getState, { api }) => {
  const { firstname, lastname, email } = payload;
  const loader = message.loading('Logginig in...');
  try {
    const { data } = await api.post('user/add', {
      firstname: `${firstname}`,
      lastname: `${lastname}`,
      email: `${email}`,
    });
    console.log(data);
    // loader();
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
