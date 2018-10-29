import { message } from 'antd';
import { addUser } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const AddUser = ({ name, surname, email, password }) => async (
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
      password,
    });
    loader();
    dispatch(addUser(data));
    message.success('User added', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
