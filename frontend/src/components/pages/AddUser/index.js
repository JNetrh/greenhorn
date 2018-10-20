import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from '../../organisms/AddUserForm';
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
})(form);

export default compose(
  redux,
  form,
)(AddUserPage);
