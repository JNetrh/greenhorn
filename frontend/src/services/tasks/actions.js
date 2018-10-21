export const LIST_TASKS = 'LIST_TASKS';
export const LIST_TASKS_SUCCESS = 'LIST_TASKS';
export const LIST_TASKS_FAILURE = 'LIST_TASKS';

export const listTasks = () => ({
  type: LIST_TASKS,
});

export const listTasksSuccess = () => ({
  type: LIST_TASKS_SUCCESS,
});

export const listTasksFailure = () => ({
  type: LIST_TASKS_FAILURE,
});

// export const startGetTaskList = () = (dispatch)
