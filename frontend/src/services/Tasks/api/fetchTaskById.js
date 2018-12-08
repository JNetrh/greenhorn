import { message } from 'antd';
import getErrorMessage from '../../../helpers/getErrorMessage';
import api from '../../../api';
import moment from 'moment';

export const fetchTaskById = async id => {
  try {
    const { data } = await api.get(`task/${id}`);
    const Documents = transformDocuments(data.Documents);
    return { ...data, Documents, owners: data.owners.map(({ id }) => id) };
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

const transformDocuments = documents =>
  documents.map(({ name, path, type, size, createdAt }) => {
    return {
      title: name,
      description: `Size: ${Math.round(size / 1024)} KB, added on: ${moment(
        createdAt,
      ).format('D. MMM YYYY HH:mm')}`,
      url: path,
    };
  });
