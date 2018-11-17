import React from 'react';
import { connect } from 'react-redux';
import { startListAssignedTasks } from '../../../services/AssignedTasks/api/list';
import { AssignedTasks } from './AssignedTasks';

import { compose } from 'recompose';

const HomePage = props => <AssignedTasks {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    startListAssignedTasks: () => dispatch(startListAssignedTasks()),  
  };
};

const mapStateToProps = ({
  assignedTasks: { assignedTasks, fetched, isLoading, error },
}) => ({
  assignedTasks,
  fetched,
  isLoading,
  error,
});

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(HomePage);
