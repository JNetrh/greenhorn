import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { logIn } from '../../../services/Auth/actions';

//TODO data coming from backend
export const EMAIL_ENDINGS = [
  { value: '@cngroup.dk', label: '@cngroup.dk' },
  { value: '@google.com', label: '@google.com' },
];

const LoginPage = props => <Form emailEndings={EMAIL_ENDINGS} {...props} />;

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
  initialValues: {
    emailEnding: EMAIL_ENDINGS[0].value,
  },
});

export default compose(
  redux,
  form,
)(LoginPage);
