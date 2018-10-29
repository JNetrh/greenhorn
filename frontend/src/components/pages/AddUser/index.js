import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { AddUser } from '../../../services/Users/api/add';
import validate from './validate';
import { EMAIL_ENDINGS } from '../Login';

const AddUserPage = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(AddUser(payload)),
  };
};

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'adduser',
  initialValues: {
    emailEnding: EMAIL_ENDINGS[0].value,
  },
  validate,
});

export default compose(
  redux,
  form,
)(AddUserPage);
