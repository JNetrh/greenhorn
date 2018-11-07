const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.estimatedTime) {
    errors.estimatedTime = 'Required';
  } else if (isNaN(values.estimatedTime)) {
    errors.estimatedTime = 'Must be numbers';
  } else if (values.estimatedTime < 1) {
    errors.estimatedTime = 'Can not be negative';
  }
  return errors;
};

export default validate;
