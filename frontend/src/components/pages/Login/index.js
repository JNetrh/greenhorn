import React from 'react';
import { reduxForm } from 'redux-form';
import Form from './Form';

const EMAIL_ENDINGS = [
  { value: 'dk', label: '@cngroup.dk' },
  { value: 'google', label: '@google.com' },
];

const LoginPage = props => <Form emailEndings={EMAIL_ENDINGS} {...props} />;

export default reduxForm({
  form: 'login',
  initialValues: {
    emailEnding: EMAIL_ENDINGS[0].value,
  },
})(LoginPage);
