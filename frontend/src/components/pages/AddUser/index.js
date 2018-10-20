import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { AddUser } from '../../../services/AddUser/actions';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(AddUser(payload)),
  };
};

const redux = connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'login',
  initialValues: {
    emailEnding: EMAIL_ENDINGS[0].value,
  },
});

export default compose(
  redux,
  form,
)(AddUserPage);
