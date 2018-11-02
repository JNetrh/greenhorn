import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form, { SEVERITY_OPTIONS } from './Form';
import { AddTask } from '../../../services/Tasks/api/add';
import validate from './validate';

const mapDispatchToProps = dispatch => {
  return { onSubmit: payload => dispatch(AddTask(payload)) };
};

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
