import { message } from 'antd';
import { updateUser } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const UpdateUser = ({ user }) => async (dispatch, getState, { api }) => {
  const loader = message.loading('Changing user detail');
  console.log(user);
  try {
    const { data } = await api.post('/user/changepwd/', {
      user,
    });
    loader();

    dispatch(updateUser(data));
    message.success('User detail changed', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
