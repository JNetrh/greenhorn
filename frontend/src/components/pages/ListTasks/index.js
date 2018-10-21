import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'recompose';

import TasksPage from './TasksPage';

import { startListTasks } from '../../../services/Tasks/api/list';

const Page = props => <TasksPage {...props} />;

const mapStateToProps = ({ tasks: { tasks, fetched, isLoading, error } }) => ({
  tasks,
  fetched,
  isLoading,
  error,
});

const mapDispatchToProps = { startListTasks };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(Page);
