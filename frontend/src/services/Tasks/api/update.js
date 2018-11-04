import { message } from 'antd';
import { updateTask } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const startUpdateTask = task => async (dispatch, getState, { api }) => {
  const loader = message.loading('Updating task...');
  try {
    const { data } = await api.put(`task/${task.id}`);
    await dispatch(updateTask(data));
    message.success('Task updated');
  } catch (error) {
    console.log(error);
    const msg = getErrorMessage(error);
    message.error(msg || 'Failed updating a task');
  }
  loader();
};
