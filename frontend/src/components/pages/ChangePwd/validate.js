const validate = values => {
const errors = {};
    if (!values.currentPassword) {
      errors.currentPassword = 'Required';
    }
    if (!values.newPassword) {
      errors.newPassword = 'Required';
    }
    else if (values.newPassword.length < 6) {
        errors.newPassword = 'Must have at least 6 charactes';
      }
    if (!values.newPasswordCheck) {
      errors.newPasswordCheck = 'Required';
    } else if (values.newPasswordCheck.length <6) {
      errors.newPasswordCheck = 'Must have at least 6 charactes';
    }
    else if (values.newPasswordCheck !== values.newPassword) {
        errors.newPasswordCheck = 'Passwords must be the same';
      }
    return errors;
  };
  
  export default validate;
  