export const REVIEW_TASKS_LIST = 'REVIEW_TASKS_LIST';
export const REVIEW_TASKS_LIST_SUCC = 'REVIEW_TASKS_LIST_SUCC';
export const REVIEW_TASKS_LIST_FAIL = 'REVIEW_TASKS_LIST_FAIL';

export const listReviewTasks = () => ({
  type: REVIEW_TASKS_LIST,
});

export const listReviewTasksSuccess = reviewTasks => ({
  type: REVIEW_TASKS_LIST_SUCC,
  payload: { reviewTasks },
});

export const listReviewTasksFailure = error => ({
  type: REVIEW_TASKS_LIST_FAIL,
  payload: { error },
});
