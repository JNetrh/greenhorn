import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { logIn } from '../../../services/Auth/actions';

const LoginPage = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(logIn(payload)),
  };
};

const redux = connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'login',
});

export default compose(
  redux,
  form,
)(LoginPage);
