import { message } from 'antd';
import { deleteTask } from '../actions';
import history from '../../../history';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const startDeleteTask = task => async (dispatch, getState, { api }) => {
  const loader = message.loading('Deleting task...');
  try {
    const { data } = await api.delete(`task/${task.id}`);
    await dispatch(deleteTask(data));
    message.success('Task deleted');
    history.push('/task/list');
  } catch (error) {
    const msg = getErrorMessage(error);
    message.error(msg || 'Failed deleting a task');
  }
  loader();
};
