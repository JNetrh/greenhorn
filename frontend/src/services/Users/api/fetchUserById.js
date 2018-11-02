import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import api from '../../../api';

export const fetchUserById = async id => {
  try {
    const { data } = await api.get(`user/${id}`);
    return data;
  } catch (err) {
    if (err.response) {
      const error = getErrorMessage(err) || 'User not found';
      message.error(error, 2);
      return {
        error,
      };
    }

    return { error: 'Fetch failed' };
  }
};
