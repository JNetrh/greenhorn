import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './view';
import { AddUser } from '../../../services/Users/api/add';
import validate from './validate';

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
  validate,
});

export default compose(
  redux,
  form,
)(AddUserPage);
