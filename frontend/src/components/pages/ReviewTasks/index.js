import { connect } from 'react-redux';
import { compose } from 'recompose';

import view from './view';
import { startListReviewTasks } from '../../../services/ReviewTasks/api/list';
import { rejectOrDoneAssignedTask } from '../../../services/ReviewTasks/api/rejectOrDoneAssignedTask';

const mapStateToProps = ({ reviewTasks }) => {
  const distinctStatuses =
    [
      ...new Set(
        reviewTasks.tasks.map(
          ({ currentWorkflow: { TaskStatus } }) => TaskStatus.name,
        ),
      ),
    ] || [];

  return { reviewTasks, distinctStatuses };
};

const mapDispatchToProps = { startListReviewTasks, rejectOrDoneAssignedTask };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(view);
