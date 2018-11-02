// import { message } from 'antd';
import { deteleUser, deteleUserSuccess, deteleUserFailure } from '../actions';

export const startDeleteUser = ({ email }) => async (
  dispatch,
  getState,
  { api },
) => {
  dispatch(deteleUser());

  try {
    const { data } = await api.delete('user', {
      email,
    });
    await dispatch(deteleUserSuccess(data));
  } catch (error) {
    dispatch(deteleUserFailure('error deleting user'));
  }
};
