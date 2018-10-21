import { message } from 'antd';
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../actions';

export const startFetchUsers = () => async (dispatch, getState, { api }) => {
  dispatch(fetchUsers());
  const loader = message.loading('Loading users');
  try {
    const { data } = await api.get('user');
    await dispatch(fetchUsersSuccess(data));
  } catch (error) {
    dispatch(fetchUsersFailure('Error fetching users'));
  }
  loader();
};
