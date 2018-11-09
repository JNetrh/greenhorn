import { connect } from 'react-redux';
import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { AddTask } from '../../../services/Tasks/api/add';
import { startFetchGroups } from '../../../services/Groups/api/list';
import validate from '../../../helpers/Validators/validateTaskForm';
import TaskPage from '../../organisms/TaskPage';
import { startFetchGroups } from '../../../services/Groups/api/list';
import Form from './view';

export const SEVERITY_OPTIONS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

<<<<<<< HEAD
const ListGroups = props => <Form {...props} />;

const TaskForm = reduxForm({
  form: 'addtask',
  initialValues: {
    severity: SEVERITY_OPTIONS[0].value,
    group: 'None',
  },
  validate,
})(ListGroups);

const AssignGroup = props => (
  <TaskPage
    {...props}
    Form={TaskForm}
    FetchGroups={startFetchGroups}
    type="add"
  />
);

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: payload => dispatch(AddTask(payload)),
  };
};
=======
const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(AddTask(payload)),
  onLoad: payload => dispatch(startFetchGroups(payload)),
});

const mapStateToProps = ({ groups }) => ({
  groups,
});
>>>>>>> 3b5c253f98a0d977501f3dc369f61f01c51a721c

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(AssignGroup);
