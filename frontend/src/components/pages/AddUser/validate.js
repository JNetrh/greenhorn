const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.surname) {
    errors.surname = 'Required';
  }
  if (!values.emailstart) {
    errors.emailstart = 'Required';
  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must have at least 6 charactes';
  }
  return errors;
};

export default validate;
