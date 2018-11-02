import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { withRouter } from 'react-router';
import { getUser } from '../../../services/Users/api/getUser.js';
import { startDeleteUser } from '../../../services/Users/api/deleteUser';

const UserDetail = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    // getUser: id => dispatch(getUser(id)),
    onSubmit: payload => dispatch(console.log(payload)),
    startDeleteUser,
  };
};

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'userDetail',
});

export default compose(
  redux,
  form,
  withRouter,
)(UserDetail);
