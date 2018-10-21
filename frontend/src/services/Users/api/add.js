import { message } from 'antd';
import { addUser } from '../actions';

export const AddUser = ({ name, surname, email }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Adding user');
  try {
    const { data } = await api.post('/user', {
      name,
      surname,
      email,
    });
    loader();
    dispatch(addUser(data));
    message.success('User added', 2);
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
