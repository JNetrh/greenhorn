export const ASSIGNED_TASKS_LIST = 'ASSIGNED_TASKS_LIST';
export const ASSIGNED_TASKS_LIST_SUCC = 'ASSIGNED_TASKS_LIST_SUCC';
export const ASSIGNED_TASKS_LIST_FAIL = 'ASSIGNED_TASKS_LIST_FAIL';

export const listAssignedTasks = () => ({
  type: ASSIGNED_TASKS_LIST,
});

export const listAssignedTasksSuccess = assignedTasks => ({
  type: ASSIGNED_TASKS_LIST_SUCC,
  payload: { assignedTasks },
});

export const listAssignedTasksFailure = error => ({
  type: ASSIGNED_TASKS_LIST_FAIL,
  payload: { error },
});
