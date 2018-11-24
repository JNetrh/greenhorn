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
  const nextWeek = new Date().setDate(new Date().getDate() + 7),
    nextWeekTasks = assignedTasks.filter(
      ({ until }) => new Date(until) < nextWeek,
    ),
    otherTasks = assignedTasks.filter(curr => !nextWeekTasks.includes(curr));
  return {
    nextWeekTasks,
    otherTasks,
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
