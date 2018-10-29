import React from 'react';
import { Field, reduxForm } from 'redux-form';


const required = value => value ? undefined : 'Required';

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue8 = minValue(8);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : undefined;


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const validationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="Last name" type="surname"
        component={renderField} label="Last name"
        validate={[ required ]}
      />
      <Field name="Email" type="email"
        component={renderField} label="Email"
        validate={email}
        warn={email}
      />
      <Field name="Password (will not be here)" type="password"
        component={renderField} label="Password (will not be here)"
        validate={[ required, minValue8 ]}
        warn={minValue8}
      />
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'validation', // a unique identifier for this form
})(validationForm);

