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
    case 'assigned': {
      return `Assigned`;
    }
    case 'submitted': {
      return `To review`;
    }
    case 'returned': {
      return `Returned`;
    }
    case 'done': {
      return `Done`;
    }
    default: {
      return 'Not known';
    }
  }
};
