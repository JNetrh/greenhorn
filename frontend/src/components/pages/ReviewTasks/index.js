import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import View from './view';
import { startListReviewTasks } from '../../../services/ReviewTasks/api/list';
import { rejectOrDoneAssignedTask } from '../../../services/AssignedTasks/api/rejectOrDoneAssignedTask';
import { ActionsCell } from './TableCells';

const reviewPage = props => <View {...props} ActionsCell={ActionsCell} />;

const mapStateToProps = ({ reviewTasks }) => reviewTasks;

const mapDispatchToProps = { startListReviewTasks, rejectOrDoneAssignedTask };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(reviewPage);
