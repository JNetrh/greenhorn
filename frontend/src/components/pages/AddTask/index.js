import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'recompose';
import { AddTask } from '../../../services/Tasks/api/add';
import { startFetchGroups } from '../../../services/Groups/api/list';
import { startFetchUsers } from '../../../services/Users/api/list';
import validate from '../../../helpers/Validators/validateTaskForm';
import Form from './view';
import { getTaskOwners } from '../../../services/Users/selectors';

export const SEVERITY_OPTIONS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];
export const PERIODICITY_OPTIONS = [
  { value: null, label: 'None' },
  { value: 1, label: 'Every day' },
  { value: 7, label: 'Every week' },
  { value: 30, label: 'Every month' },
  { value: 365, label: 'Every year' },
];

const selector = formValueSelector('addtask');

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(AddTask(payload)),
  onLoad: () => {
    dispatch(startFetchGroups());
    dispatch(startFetchUsers());
  },
});

const mapStateToProps = state => {
  const { groups, users } = state;
  return {
    groups,
    users: getTaskOwners(users.users),
    canUserEdit: true,
    newDocuments: selector(state, 'documents'),
  };
};

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const form = reduxForm({
  form: 'addtask',
  initialValues: {
    severity: SEVERITY_OPTIONS[0].value,
    periodicity: PERIODICITY_OPTIONS[0].value,
  },
  validate,
});

export default compose(
  redux,
  form,
)(Form);
