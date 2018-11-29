export const getWorkflowColor = severity => {
  switch (severity.toLowerCase()) {
    case 'assigned':
      return '#488869';
    case 'submitted':
      return 'green';
    case 'returned':
      return 'red';
    case 'done':
      return 'green';
    default:
      return '#eee';
  }
};
