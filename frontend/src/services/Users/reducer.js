import {
  LIST_FETCH_USERS,
  LIST_FETCH_USERS_SUCCESS,
  LIST_FETCH_USERS_FAILURE,
  ADD_NEW_USER,
} from './actions';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  fetched: false,
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
        fetched: true,
        error: null,
        users: [...state.users, ...users],
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

    case ADD_NEW_USER: {
      const { user } = action.payload;
      console.log('Adding', user, 'to', state.users);
      return {
        ...state,
        users: [...state.users, user],
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
