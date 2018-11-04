import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import EditTaskPage from './EditTaskPage';
import { withRouter } from 'react-router';
import { startDeleteTask } from '../../../services/Tasks/api/delete';
import validate from '../../../helpers/Validators/validateTaskForm';
import view from './view';

const Form = reduxForm({
  form: 'taskDetail',
  validate,
})(view);

const EditTask = props => (
  <EditTaskPage {...props} TaskForm={Form} type="edit" />
);

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(startDeleteTask(item)),
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditTask);
