import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { AddUser } from '../../../services/AddUser/actions';

const AddUserPage = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(AddUser(payload)),
  };
};

const redux = connect(
  ({ addUser }) => ({ addUser }),
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'adduser',
});

export default compose(
  redux,
  form,
)(AddUserPage);
