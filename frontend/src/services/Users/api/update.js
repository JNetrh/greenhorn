import { message } from 'antd';
import { updateUser } from '../actions';
import history from '../../../history';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const startUpdateUser = user => async (dispatch, getState, { api }) => {
  const loader = message.loading('Updating user...');
  try {
    const { data } = await api.put(`user/${user.id}`, user);
    dispatch(updateUser(data));

    message.success(`${data.name} ${data.surname} "${data.email}" updated`, 2);
    history.push('/user/list');
  } catch (error) {
    const msg = getErrorMessage(error);
    message.error(msg || 'User update failed', 2);
  }
  loader();
};
