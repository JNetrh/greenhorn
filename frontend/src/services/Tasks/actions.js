export const LIST_TASKS = 'LIST_TASKS';
export const LIST_TASKS_SUCCESS = 'LIST_TASKS_SUCCESS';
export const LIST_TASKS_FAILURE = 'LIST_TASKS_FAILURE';
export const ADD_NEW_TASK = 'ADD_NEW_TASK';

export const listTasks = () => ({
  type: LIST_TASKS,
});

export const listTasksSuccess = tasks => ({
  type: LIST_TASKS_SUCCESS,
  payload: { tasks },
});

export const listTasksFailure = error => ({
  type: LIST_TASKS_FAILURE,
  payload: { error },
});

export const addTask = task => ({
  type: ADD_NEW_TASK,
  payload: { task },
});
