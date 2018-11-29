export const getSeverityColor = severity => {
  switch (severity.toLowerCase()) {
    case 'high':
      return '#ff7676';
    case 'medium':
      return '#f9b46b';
    // case 'low':
    //   return '#87d068';
    default:
      return '#eee';
  }
};

//TODO implement on backend
export const sortBySeverity = toSort =>
  toSort.sort(a => {
    if (a === 'high') {
      return 1;
    }
    if (a === 'medium') {
      return 0;
    }
    return -1;
  });
