import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import api from '../../../api';

export const fetchGroupById = async id => {
  try {
    const { data } = await api.get(`assignedTask/${id}`);
    return data;
  } catch (err) {
    if (err.response) {
      const error = getErrorMessage(err) || 'Group not found';
      message.error(error, 2);
      return {
        error,
      };
    }
    return { error: 'Fetch failed' };
  }
};
