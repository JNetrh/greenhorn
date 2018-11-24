import { message } from 'antd';
import {
  listAssignedTasks,
  listAssignedTasksSuccess,
  listAssignedTasksFailure,
} from '../actions';

export const startListAssignedTasks = () => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    dispatch(listAssignedTasks());
    const { data } = await api.get('assignedTask');
    dispatch(listAssignedTasksSuccess(data));
  } catch (error) {
    message.error('Loading assigned tasks failed');
    dispatch(listAssignedTasksFailure(error));
  }
};
