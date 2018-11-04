export const TASKS_LIST = 'TASKS_LIST';
export const TASKS_LIST_SUCC = 'TASKS_LIST_SUCC';
export const TASKS_LIST_FAIL = 'TASKS_LIST_FAIL';
export const TASKS_ADD = 'TASKS_ADD';
export const TASKS_UPDATE = 'TASKS_UPDATE';
export const TASKS_DELETE = 'TASKS_DELETE';

export const listTasks = () => ({
  type: TASKS_LIST,
});

export const listTasksSuccess = tasks => ({
  type: TASKS_LIST_SUCC,
  payload: { tasks },
});

export const listTasksFailure = error => ({
  type: TASKS_LIST_FAIL,
  payload: { error },
});

export const addTask = task => ({
  type: TASKS_ADD,
  payload: { task },
});

export const updateTask = task => ({
  type: TASKS_UPDATE,
  payload: { task },
});

export const deleteTask = task => ({
  type: TASKS_DELETE,
  payload: { task },
});
