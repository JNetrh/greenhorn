import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { ChangePwdUser } from '../../../services/Users/api/changePwd';

const ChangePwd = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(ChangePwdUser(payload)),
  };
};

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'ChangePwd',
});

export default compose(
  redux,
  form,
)(ChangePwd);
