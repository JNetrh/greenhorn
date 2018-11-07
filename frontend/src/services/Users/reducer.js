import {
  USERS_LIST_FETCH,
  USERS_LIST_FETCH_SUCC,
  USERS_LIST_FETCH_FAIL,
  USERS_ADD,
  USERS_DELETE,
  USERS_UPDATE,
} from './actions';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const UsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LIST_FETCH:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case USERS_LIST_FETCH_SUCC: {
      const { users } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        users: [...state.users, ...users],
      };
    }

    case USERS_LIST_FETCH_FAIL: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        users: null,
        error,
      };
    }

    case USERS_ADD: {
      const { user } = action.payload;
      return {
        ...state,
        users: [...state.users, user],
      };
    }

    case USERS_DELETE: {
      const { user } = action.payload;
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== user.id),
      };
    }

    case USERS_UPDATE: {
      const { user } = action.payload;
      return {
        ...state,
        users: state.users.map(curr => (curr.id === user.id ? user : curr)),
      };
    }

    default:
      return state;
  }
};

// - selectors - //

export const getUsers = state => state.users || [];

export const getIsLoaded = state => state.users !== null;

export const getIsLoading = state => state.isLoading;

export const getIsError = state => state.error !== null;

export const getError = state => state.error;
