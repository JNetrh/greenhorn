import { message } from 'antd';
import { deleteGroup } from '../actions';
import history from '../../../history';

export const startDeleteGroup = user => async (dispatch, getState, { api }) => {
  const loader = message.loading('Deleting group...');
  try {
    const { data } = await api.delete(`group/${user.id}`);
    dispatch(deleteGroup(data));
    loader();
    message.success(`Group "${data.name}" deleted`, 2);
    history.push('/group/list');
  } catch (error) {
    message.error('Group delete failed', 2);
  }
};
