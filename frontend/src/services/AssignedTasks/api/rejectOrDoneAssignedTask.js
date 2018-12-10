import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
export const rejectOrDoneAssignedTask = submission => async (
  dispatch,
  getState,
  { api },
) => {
  try {
    const { data } = await api.post(`submit/${submission.status}`, submission);
    message.success(`Task marked as '${submission.status}'`);
    return data;
  } catch (err) {
    if (err.response) {
      const error =
        getErrorMessage(err) || `Failed to mark task as '${submission.status}'`;
      message.error(error, 2);
      return {
        error,
      };
    }
  }
  return { error: 'Submit task failed' };
};
