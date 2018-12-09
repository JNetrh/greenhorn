import { message } from 'antd';
import { addTask } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { makeFormData } from '../../../helpers/makeFormData';
import history from '../../../history';

export const AddTask = ({ documents, ...rest }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Adding task');
  const formData = makeFormData({ documents, data: rest });
  try {
    const { data } = await api({
      method: 'POST',
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
      url: 'task',
    });
    loader();
    dispatch(addTask(data));
    history.push('/task/list');
    message.success('Task added', 2);
  } catch (err) {
    if (err.response) {
      message.error(getErrorMessage(err), 2);
      await loader();
    }
    console.log(err);
  }
};
