import {
  ASSIGNED_TASKS_LIST,
  ASSIGNED_TASKS_LIST_SUCC,
  ASSIGNED_TASKS_LIST_FAIL,
} from './actions';

const initialState = {
  assignedTasks: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const assignedTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASSIGNED_TASKS_LIST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case ASSIGNED_TASKS_LIST_SUCC: {
      const { assignedTasks } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        assignedTasks,
      };
    }
    case ASSIGNED_TASKS_LIST_FAIL: {
      const { error } = action.payload;
      return {
        isLoading: false,
        fetched: false,
        error,
        assignedTasks: [],
      };
    }
    default:
      return state;
  }
};
