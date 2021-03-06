import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import Form from './Form';
import validate from '../../../helpers/Validators/validateTaskForm';
import DetailPage from '../../organisms/DetailPage';
import { startDeleteUser } from '../../../services/Users/api/delete';
import { startUpdateUser } from '../../../services/Users/api/update';
import { fetchUserById } from '../../../services/Users/api/fetchUserById';
import { startFetchGroups } from '../../../services/Groups/api/list';

const UserForm = reduxForm({
  form: 'userDetail',
  validate,
})(Form);

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
  onLoad: payload => dispatch(startFetchGroups(payload)),
});

const mapStateToProps = ({ groups, auth }) => ({
  groups,
  auth,
});

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditUser);
