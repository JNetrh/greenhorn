import { message } from 'antd';
import {
  listReviewTasks,
  listReviewTasksSuccess,
  listReviewTasksFailure,
} from '../actions';

export const startListReviewTasks = () => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    dispatch(listReviewTasks());
    const { data } = await api.get('assignedTask/review');
    dispatch(listReviewTasksSuccess(data));
  } catch (error) {
    message.error('Loading tasks to review failed');
    dispatch(listReviewTasksFailure(error));
  }
};
