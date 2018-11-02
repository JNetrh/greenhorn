import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import EditUserPage from './EditUserPage';
import { withRouter } from 'react-router';
import { startDeleteUser } from '../../../services/Users/api/deleteUser';

const UserDetail = props => <Form {...props} />;

const UserForm = reduxForm({
  form: 'userDetail',
})(UserDetail);

const EditUser = props => <EditUserPage {...props} UserForm={UserForm} />;

const mapDispatchToProps = { startDeleteUser };

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(redux)(withRouter(EditUser));
