import React from 'react';
// import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
// import { withRouter } from 'react-router';
// import { startDeleteTask } from '../../../services/Tasks/api/delete';
// import { startUpdateTask } from '../../../services/Tasks/api/update';
// import validate from '../../../helpers/Validators/validateTaskForm';
// import { fetchTaskById } from '../../../services/Tasks/api/fetchTaskById.js';
// import view from './view';
// import DetailPage from '../../organisms/DetailPage';
import SubmitPage from './SubmitPage';

// const TaskForm = reduxForm({
//   form: 'submitTask',
// })(view);

// const EditTaskPage = props => (
//   <DetailPage
//     {...props}
//     Form={TaskForm}
//     fetchDetailById={fetchTaskById}
//     type="edit"
//   />
// );

const SubmitTaskPage = props => <SubmitPage {...props} />;

// const mapDispatchToProps = dispatch => ({
//   deleteItem: item => dispatch(startDeleteTask(item)),
//   onSubmit: item => dispatch(startUpdateTask(item)),
// });

// const redux = connect(
//   null,
//   mapDispatchToProps,
// );

// export default compose(
//   redux,
//   withRouter,
// )(EditTaskPage);

export default compose()(SubmitTaskPage);
