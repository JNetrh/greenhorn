import {
  TASKS_LIST,
  TASKS_LIST_SUCC,
  TASKS_LIST_FAIL,
  TASKS_ADD,
  TASKS_DELETE,
  TASKS_UPDATE,
} from './actions';

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case TASKS_LIST_SUCC: {
      const { tasks } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        tasks,
      };
    }
    case TASKS_LIST_FAIL: {
      const { error } = action.payload;
      return {
        isLoading: false,
        fetched: false,
        error,
        tasks: [],
      };
    }
    case TASKS_ADD: {
      const { task } = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, task],
      };
    }
    case TASKS_UPDATE: {
      const { task } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map(curr => (curr.id === task.id ? task : curr)),
      };
    }
    case TASKS_DELETE: {
      const { task } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => task.id !== id),
      };
    }
    default:
      return state;
  }
};
