import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import api from '../../../api';

export const fetchUserById = async id => {
  try {
    const {
      data: { Groups, ...rest },
    } = await api.get(`user/${id}`);

    const groups = Groups.map(({ id }) => id);
    return {
      groups,
      ...rest,
    };
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
