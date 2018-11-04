import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { AddTask } from '../../../services/Tasks/api/add';
import validate from '../../../helpers/Validators/validateTaskForm';
import Form from './view';

export const SEVERITY_OPTIONS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const mapDispatchToProps = dispatch => {
  return { onSubmit: payload => dispatch(AddTask(payload)) };
};

const redux = connect(
  null,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'addtask',
  initialValues: { severity: SEVERITY_OPTIONS[0].value },
  validate,
});

export default compose(
  redux,
  form,
)(Form);
