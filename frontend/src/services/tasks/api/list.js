import { message } from 'antd';
import { listTasks, listTasksSuccess, listTasksFailure } from '../actions';

export const startListTasks = () => async (dispatch, getState, { api }) => {
  dispatch(listTasks());
  const loader = message.loading('Loading tasks');
  try {
    const { data } = await api.get('tasks');
    await dispatch(listTasksSuccess(data));
  } catch (error) {
    dispatch(listTasksFailure('error fetching tasks'));
  }
  loader();
};
