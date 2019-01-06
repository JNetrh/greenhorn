export const REVIEW_TASKS_LIST = 'REVIEW_TASKS_LIST';
export const REVIEW_TASKS_LIST_SUCC = 'REVIEW_TASKS_LIST_SUCC';
export const REVIEW_TASKS_LIST_FAIL = 'REVIEW_TASKS_LIST_FAIL';
export const REVIEW_TASKS_UPDATE_ITEM = 'REVIEW_TASKS_UPDATE_ITEM';

export const listReviewTasks = () => ({
  type: REVIEW_TASKS_LIST,
});

export const listReviewTasksSuccess = tasks => ({
  type: REVIEW_TASKS_LIST_SUCC,
  payload: { tasks },
});

export const listReviewTasksFailure = error => ({
  type: REVIEW_TASKS_LIST_FAIL,
  payload: { error },
});

export const listReviewTasksUpdateItem = item => ({
  type: REVIEW_TASKS_UPDATE_ITEM,
  payload: { item },
});
