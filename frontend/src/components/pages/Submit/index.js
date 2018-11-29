import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { compose } from 'recompose';
import { submitAssignedTask } from '../../../services/AssignedTasks/api/submitAssignedTask';
import { fetchAssignedTaskById } from '../../../services/AssignedTasks/api/fetchAssignedTaskById';
import SubmitForm from './SubmitForm';
import SubmitPage from './SubmitPage';

const SubmitTaskForm = reduxForm({
  form: 'submitTask',
})(SubmitForm);

const EnrichedSubmitPage = props => (
  <SubmitPage
    {...props}
    Form={SubmitTaskForm}
    fetchAssignedTaskById={fetchAssignedTaskById}
    type="userSubmit"
  />
);

const mapDispatchToProps = dispatch => ({
  onTaskSubmit: item => dispatch(submitAssignedTask(item)),
});

const redux = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EnrichedSubmitPage);
