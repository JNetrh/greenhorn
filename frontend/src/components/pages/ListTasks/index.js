import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import TasksPage from './TasksPage';

import { startListTasks } from '../../../services/Tasks/api/list';

const Page = props => <TasksPage {...props} />;

const mapStateToProps = ({
  tasks: { tasks, fetched, isLoading, error },
  auth: { user },
}) => ({
  tasks,
  fetched,
  isLoading,
  error,
  currentUser: user,
});

const mapDispatchToProps = { startListTasks };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(Page);
