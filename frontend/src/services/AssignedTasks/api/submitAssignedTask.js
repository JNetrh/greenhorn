import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';

import history from '../../../history';

export const submitAssignedTask = task => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    const { data } = await api.post(`submit`, task);
    history.push('/');
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
