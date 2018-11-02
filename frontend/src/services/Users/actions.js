export const LIST_FETCH_USERS = 'LIST_FETCH_USERS';
export const LIST_FETCH_USERS_SUCCESS = 'LIST_FETCH_USERS_SUCCESS';
export const LIST_FETCH_USERS_FAILURE = 'LIST_FETCH_USERS_FAILURE';
export const ADD_NEW_USER = 'ADD_NEW_USER';
export const CHANGE_PWD_USER = 'CHANGE_PWD_USER';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';

export const fetchUsers = () => ({
  type: LIST_FETCH_USERS,
});

export const fetchUsersSuccess = users => ({
  type: LIST_FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersFailure = error => ({
  type: LIST_FETCH_USERS_FAILURE,
  payload: { error },
});

export const addUser = user => ({
  type: ADD_NEW_USER,
  payload: { user },
});

export const changePwdUser = user => ({
  type: CHANGE_PWD_USER,
  payload: { user },
});

export const getUser = id => ({
  type: GET_USER_BY_ID,
  payload: { id },
});
