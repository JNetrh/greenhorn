export const getWorkflowColor = status => {
  switch (status.toLowerCase()) {
    case 'submitted':
      return '#f9b46b';
    case 'returned':
      return '#ff7676';
    case 'done':
      return '#87d068';
    default:
      return '#6e98c7';
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

export const getWorkflowTextUser = (status, submittedBy) => {
  const fullName = submittedBy && `${submittedBy.name} ${submittedBy.surname}`;
  switch (status) {
    case 'assigned': {
      return `Task assigned.`;
    }
    case 'submitted': {
      return `Submitted by ${fullName} `;
    }
    case 'returned': {
      return `Returned by ${fullName}.`;
    }
    case 'done': {
      return `Task done. Accepted by ${fullName}.`;
    }
    default: {
      return '';
    }
  }
};
