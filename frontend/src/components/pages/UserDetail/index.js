import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import EditUserPage from './EditUserPage';
import { withRouter } from 'react-router';
import { startDeleteUser } from '../../../services/Users/api/delete';
import { startUpdateUser } from '../../../services/Users/api/update';

const UserDetail = props => <Form {...props} />;

const UserForm = reduxForm({
  form: 'userDetail',
})(UserDetail);

const EditUser = props => <EditUserPage {...props} UserForm={UserForm} />;

const mapDispatchToProps = dispatch => ({
  deleteUser: user => dispatch(startDeleteUser(user)),
  updateUser: user => dispatch(startUpdateUser(user)),
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditUser);
