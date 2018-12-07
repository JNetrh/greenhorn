export const makeFormData = ({ documents, data }) => {
  const fd = new FormData();
  if (documents) {
    Array.from(documents).forEach(doc => fd.append('documents', doc));
  }
  fd.append('data', JSON.stringify(data));
  return fd;
};
