import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import TaskForm, { SEVERITY_OPTIONS } from '../../organisms/Forms/TaskForm';
import { AddTask } from '../../../services/Tasks/api/add';
import validate from '../../../helpers/Validators/validateTaskForm';

const mapDispatchToProps = dispatch => {
  return { onSubmit: payload => dispatch(AddTask(payload)) };
};

const Form = props => <TaskForm {...props} type="create" />;

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'addtask',
  initialValues: { severity: SEVERITY_OPTIONS[0].value },
  validate,
});

export default compose(
  redux,
  form,
)(Form);
