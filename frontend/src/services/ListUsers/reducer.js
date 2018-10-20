import {
  LIST_FETCH_USERS,
  LIST_FETCH_USERS_SUCCESS,
  LIST_FETCH_USERS_FAILURE,
} from './actions';

const initialState = {
  users: null,
  isLoading: false,
  error: null,
};

export const UsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_FETCH_USERS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LIST_FETCH_USERS_SUCCESS: {
      const { users } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: null,
        users,
      };
    }

    case LIST_FETCH_USERS_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        users: null,
        error,
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
