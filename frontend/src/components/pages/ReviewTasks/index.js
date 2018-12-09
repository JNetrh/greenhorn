import { connect } from 'react-redux';

import view from './view';
import { startListReviewTasks } from '../../../services/ReviewTasks/api/list';

const mapStateToProps = ({ reviewTasks }) => reviewTasks;

const mapDispatchToProps = { startListReviewTasks };

const redux = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default redux(view);
