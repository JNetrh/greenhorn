import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Form from './Form';
import DetailPage from '../../organisms/DetailPage';
import { startDeleteUser } from '../../../services/Users/api/delete';
import { startUpdateUser } from '../../../services/Users/api/update';
import { fetchUserById } from '../../../services/Users/api/fetchUserById';

const UserDetail = props => <Form {...props} />;

const UserForm = reduxForm({
  form: 'userDetail',
})(UserDetail);

const EditUser = props => (
  <DetailPage
    {...props}
    Form={UserForm}
    fetchDetailById={fetchUserById}
    type="edit"
  />
);

const mapDispatchToProps = dispatch => ({
  deleteItem: user => dispatch(startDeleteUser(user)),
  onSubmit: user => dispatch(startUpdateUser(user)),
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditUser);
