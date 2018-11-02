import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';

export const getUser = id => async (dispatch, getState, { api }) => {
  try {
    const { data } = await api.get(`/user/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    if (err.response) {
      const error = getErrorMessage(err) || 'User not found';
      message.error(error, 2);
      return {
        error,
      };
    }
  }
};
