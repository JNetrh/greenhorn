import { message } from 'antd';
import history from '../../../history';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { updateGroup } from '../actions';

export const startUpdateGroup = group => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Updating group...');
  try {
    const { data } = await api.put(`group/${group.id}`, group);
    dispatch(updateGroup(data));

    message.success(`Group "${data.name}" updated`, 2);
    history.push('/group/list');
  } catch (error) {
    const msg = getErrorMessage(error);
    message.error(msg || 'Group update failed', 2);
  }
  loader();
};
