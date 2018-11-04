import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import TaskForm, { SEVERITY_OPTIONS } from '../../organisms/Forms/TaskForm';
import EditTaskPage from './EditTaskPage';
import { withRouter } from 'react-router';
import { startDeleteTask } from '../../../services/Tasks/api/deleteTask';
import validate from '../../../helpers/Validators/validateTaskForm';

const TaskDetail = props => <TaskForm {...props} />;

const Form = reduxForm({
  form: 'taskDetail',
  initialValues: { severity: SEVERITY_OPTIONS[0].value },
  validate,
})(TaskDetail);

const EditTask = props => (
  <EditTaskPage {...props} TaskForm={Form} type="edit" />
);

const mapDispatchToProps = { startDeleteTask };

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(redux)(withRouter(EditTask));
