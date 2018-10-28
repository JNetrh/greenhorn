import { message } from 'antd';
import { addTask } from '../actions';

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
      const {
        data: { msg },
      } = err.response;
      await loader();
      message.error(msg, 2);
    }
    console.log(err);
  }
};
