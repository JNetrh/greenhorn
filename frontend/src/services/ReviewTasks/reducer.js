import {
  REVIEW_TASKS_LIST,
  REVIEW_TASKS_LIST_SUCC,
  REVIEW_TASKS_LIST_FAIL,
} from './actions';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const reviewTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REVIEW_TASKS_LIST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case REVIEW_TASKS_LIST_SUCC: {
      const { tasks } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        tasks,
      };
    }
    case REVIEW_TASKS_LIST_FAIL: {
      const { error } = action.payload;
      return {
        isLoading: false,
        fetched: false,
        error,
      };
    }
    default:
      return state;
  }
};
