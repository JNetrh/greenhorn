import { message } from 'antd';
// import { addUser } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { addGroup } from '../actions';
import history from '../../../history';

export const AddGroup = ({ name, description }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Adding group');
  try {
    const { data } = await api.post('/group', {
      name,
      description,
    });
    loader();
    dispatch(addGroup(data));
    history.push('/group/list');
    message.success('Group added', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
  }
};
