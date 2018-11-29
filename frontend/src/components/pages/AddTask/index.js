import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
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

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(AddTask(payload)),
  onLoad: () => {
    dispatch(startFetchGroups());
    dispatch(startFetchUsers());
  },
});

const mapStateToProps = ({ groups, users }) => ({
  groups,
  users: getTaskOwners(users.users),
  canUserEdit: true,
});

const redux = connect(
  mapStateToProps,
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
