import { connect } from 'react-redux';
import { startListAssignedTasks } from '../../../services/AssignedTasks/api/list';
import { AssignedTasks } from './AssignedTasks';

import { compose } from 'recompose';

const mapDispatchToProps = dispatch => {
  return {
    startListAssignedTasks: () => dispatch(startListAssignedTasks()),
  };
};

const mapStateToProps = ({
  assignedTasks: { assignedTasks, fetched, isLoading, error },
  auth: { user },
}) => {
  const todoTasks = assignedTasks.filter(
      ({ currentWorkflow }) => currentWorkflow.TaskStatus.name !== 'submitted',
    ),
    tasksToReview = assignedTasks.filter(
      ({ currentWorkflow }) => currentWorkflow.TaskStatus.name === 'submitted',
    );
  return {
    todoTasks,
    tasksToReview,
    fetched,
    isLoading,
    error,
    user,
  };
};

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(AssignedTasks);
