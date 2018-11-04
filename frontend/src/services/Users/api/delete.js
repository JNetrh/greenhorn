import { message } from 'antd';
import { deleteUser } from '../actions';
import history from '../../../history';

export const startDeleteUser = user => async (dispatch, getState, { api }) => {
  const loader = message.loading('Deleting user...');
  try {
    const { data } = await api.delete(`user/${user.id}`);
    dispatch(deleteUser(data));
    loader();
    message.success(`${data.name} ${data.surname} "${data.email}" deleted`, 2);
    history.push('/user/list');
  } catch (error) {
    message.error('User delete failed', 2);
  }
};
