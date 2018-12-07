import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';

import history from '../../../history';

export const submitAssignedTask = ({ data, id }) => async (
  dispatch,
  getState,
  { api },
) => {
  // const { documents } = this.state;
  const fd = new FormData();
  if (data.documents) {
    Array.from(data.documents).forEach(doc => fd.append('documents', doc));
  }
  fd.append(
    'data',
    JSON.stringify({ ...data, status: 'submitted', assignedTaskId: id }),
  );
  try {
    // const { data } = await api.post(`submit`, task);
    const { data } = await api({
      method: 'POST',
      headers: { 'content-type': 'multipart/form-data' },
      data: fd,
      url: 'submit',
    });
    // history.push('/');
    message.success('Task submitted');
    return data;
  } catch (err) {
    if (err.response) {
      const error = getErrorMessage(err) || 'Submit task failed';
      message.error(error, 2);
      return {
        error,
      };
    }
  }
  return { error: 'Submit task failed' };
};
