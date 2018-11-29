import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';
import { EditAccount } from '../../../services/Users/api/editAccount';
//import validate from './validate';

const MyAccount = props => <Form {...props} />;

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(EditAccount(payload)),
  };
};
const mapStateToProps = ({ auth: { user } }) => ({ initialValues: user, user });

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'MyAccount',
  //validate,
});

export default compose(
  redux,
  form,
)(MyAccount);
