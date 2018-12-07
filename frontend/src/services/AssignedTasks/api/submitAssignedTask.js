import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import { reset } from 'redux-form';
import { makeFormData } from '../../../helpers/makeFormData';

export const submitAssignedTask = ({ data, id }) => async (
  dispatch,
  getState,
  { api },
) => {
  const formData = makeFormData({
    documents: data.documents,
    data: { ...data, status: 'submitted', assignedTaskId: id },
  });
  try {
    const { data } = await api({
      method: 'POST',
      headers: { 'content-type': 'multipart/form-data' },
      data: formData,
      url: 'submit',
    });
    message.success('Task submitted');
    dispatch(reset('submitTask'));
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
