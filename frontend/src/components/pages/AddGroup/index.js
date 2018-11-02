import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import Form from './Form';

const AddGroupPage = props => <Form {...props} />;

// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: payload => dispatch(AddUser(payload)),
//   };
// };

// const redux = connect(
//   null,
//   // mapDispatchToProps,
// );

const form = reduxForm({
  form: 'addgroup',
});

export default compose(
  // redux,
  form,
)(AddGroupPage);
