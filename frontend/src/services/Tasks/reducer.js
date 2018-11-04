import {
  LIST_TASKS,
  LIST_TASKS_SUCCESS,
  LIST_TASKS_FAILURE,
  ADD_NEW_TASK,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from './actions';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_TASKS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LIST_TASKS_SUCCESS: {
      const { tasks } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        tasks,
      };
    }
    case LIST_TASKS_FAILURE: {
      const { error } = action.payload;
      return {
        isLoading: false,
        fetched: false,
        error,
        tasks: [],
      };
    }
    case ADD_NEW_TASK: {
      const { task } = action.payload;
      return {
        tasks: [...state.tasks, task],
      };
    }

    case DELETE_TASK:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case DELETE_TASK_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }

    case DELETE_TASK_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
};
