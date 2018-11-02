import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { getUser } from '../../../services/Users/api/getUser.js';

const UserDetail = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    // getUser: id => dispatch(getUser(id)),
    onSubmit: payload => dispatch(console.log(payload)),
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
)(UserDetail);
