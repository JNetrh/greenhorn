export const getWorkflowColor = status => {
  switch (status.toLowerCase()) {
    case 'submitted':
      return '#87d068';
    case 'returned':
      return '#ff7676';
    case 'done':
      return '#f9b46b';
    default:
      return '#eee';
  }
};

export const getWorkflowText = status => {
  switch (status) {
    case 'assigned':
      return 'Assigned to user';
    case 'submitted':
      return 'To review';
    case 'returned':
      return 'Returned to user';
    default:
      return 'Done';
  }
};
