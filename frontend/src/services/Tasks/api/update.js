import { message } from 'antd';
import { updateTask } from '../actions';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { makeFormData } from '../../../helpers/makeFormData';

export const startUpdateTask = ({ documents, id, ...rest }) => async (
  dispatch,
  getState,
  { api },
) => {
  const loader = message.loading('Updating task...');
  const formData = makeFormData({ documents, data: rest });
  try {
    const { data } = await api({
      method: 'PUT',
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
      url: `task/${id}`,
    });
    await dispatch(updateTask(data));
    message.success('Task updated');
  } catch (error) {
    console.log(error);
    const msg = getErrorMessage(error);
    message.error(msg || 'Failed updating a task');
  }
  loader();
};
