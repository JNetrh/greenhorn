import moment from 'moment';

export const transformDocuments = documents =>
  documents.map(({ name, path, type, size, createdAt }) => {
    return {
      title: name,
      description: `Size: ${Math.round(size / 1024)} KB, added on: ${moment(
        createdAt,
      ).format('D. MMM YYYY HH:mm')}`,
      url: path,
    };
  });
