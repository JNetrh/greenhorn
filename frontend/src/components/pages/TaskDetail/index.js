import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import { startDeleteTask } from '../../../services/Tasks/api/delete';
import { startUpdateTask } from '../../../services/Tasks/api/update';
import validate from '../../../helpers/Validators/validateTaskForm';
import { fetchTaskById } from '../../../services/Tasks/api/fetchTaskById.js';
import view from './view';
import DetailPage from '../../organisms/DetailPage';
import { startFetchGroups } from '../../../services/Groups/api/list';
import { startFetchUsers } from '../../../services/Users/api/list';
import { getTaskOwners } from '../../../services/Users/selectors';

const selector = formValueSelector('taskDetail');

const TaskForm = reduxForm({
  form: 'taskDetail',
  validate,
})(view);

const EditTaskPage = props => (
  <DetailPage
    {...props}
    Form={TaskForm}
    fetchDetailById={fetchTaskById}
    type="edit"
  />
);

const mapDispatchToProps = dispatch => ({
  deleteItem: item => dispatch(startDeleteTask(item)),
  onSubmit: item => dispatch(startUpdateTask(item)),
  onLoad: () => {
    dispatch(startFetchGroups());
    dispatch(startFetchUsers());
  },
});

const mapStateToProps = state => {
  const {
    groups,
    users,
    auth: { user },
  } = state;
  return {
    groups,
    users: getTaskOwners(users.users),
    currentUser: user,
    newDocuments: selector(state, 'documents'),
  };
};

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  redux,
  withRouter,
)(EditTaskPage);
