import {
  LIST_FETCH_USERS,
  LIST_FETCH_USERS_SUCCESS,
  LIST_FETCH_USERS_FAILURE,
  ADD_NEW_USER,
  CHANGE_PWD_USER,
  GET_USER_BY_ID,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
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

    case CHANGE_PWD_USER: {
      const { currentPassword, newPassword, newPasswordCheck } = action.payload;
      console.log('Changing', currentPassword, 'to', newPassword);
      return {
        ...state,
        isLoading: false,
      };
    }

    case GET_USER_BY_ID: {
      const { id } = action.payload;
      console.log(id);
      return {
        ...state,
        isLoading: false,
      };
    }

    case DELETE_USER:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }

    case DELETE_USER_FAILURE: {
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

// - selectors - //

export const getUsers = state => state.users || [];

export const getIsLoaded = state => state.users !== null;

export const getIsLoading = state => state.isLoading;

export const getIsError = state => state.error !== null;

export const getError = state => state.error;
