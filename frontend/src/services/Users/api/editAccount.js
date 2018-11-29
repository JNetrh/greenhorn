import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { updateUser } from '../../Auth/actions';

export const EditAccount = ({ name, surname }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Changing user edits');
  try {
    await api.put('/auth/', {
      name,
      surname,
    });
    dispatch(updateUser({ name, surname }));
    loader();
    message.success('User profile changed', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
