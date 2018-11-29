import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import api from '../../../api';

export const fetchTaskById = async id => {
  try {
    const { data } = await api.get(`task/${id}`);
    return { ...data, owners: data.owners.map(({ id }) => id) };
  } catch (err) {
    if (err.response) {
      const error = getErrorMessage(err) || 'Task not found';
      message.error(error, 2);
      return {
        error,
      };
    }

    return { error: 'Fetch failed' };
  }
};
