import { connect } from 'react-redux';
import React from 'react';
import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { AddTask } from '../../../services/Tasks/api/add';
import validate from '../../../helpers/Validators/validateTaskForm';
import TaskPage from '../../organisms/TaskPage';
import { startFetchGroups } from '../../../services/Groups/api/list';
import Form from './view';

export const SEVERITY_OPTIONS = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

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

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(redux)(AssignGroup);
