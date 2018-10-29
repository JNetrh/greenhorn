import { message } from 'antd';
import { addTask } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const AddTask = ({ id, name, description }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Adding task');
  try {
    const { data } = await api.post('/task', {
      id,
      name,
      description,
    });
    loader();
    dispatch(addTask(data));
    message.success('Task added', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
