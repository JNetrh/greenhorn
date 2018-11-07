import { message } from 'antd';
import { addUser } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';
import history from '../../../history';

export const AddUser = user => async (dispatch, getState, { api }) => {
  const loader = message.loading('Adding user');
  try {
    const { data } = await api.post('/user', user);
    loader();
    dispatch(addUser(data));
    history.push('/user/list');
    message.success('User added', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
