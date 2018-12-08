import { connect } from 'react-redux';
import { startListReviewTasks } from '../../../services/ReviewTasks/api/list';
import { AssignedTasks } from './view';

import { compose } from 'recompose';

const mapDispatchToProps = dispatch => {
  return {
    startListReviewTasks: () => dispatch(startListReviewTasks()),
  };
};

const mapStateToProps = ({
  reviewTasks: { tasks, fetched, isLoading, error },
  auth: { user },
}) => {
  return {
    tasks,
    fetched,
    isLoading,
    error,
    user,
  };
};

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(redux)(AssignedTasks);
