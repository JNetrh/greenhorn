export const USERS_LIST_FETCH = 'USER_LIST_FETCH';
export const USERS_LIST_FETCH_SUCC = 'USERS_LIST_FETCH_SUCC';
export const USERS_LIST_FETCH_FAIL = 'USERS_LIST_FETCH_FAIL';
export const USERS_ADD = 'USERS_ADD';
export const USERS_DELETE = 'USERS_DELETE';
export const USERS_UPDATE = 'USERS_UPDATE';

export const fetchUsers = () => ({
  type: USERS_LIST_FETCH,
});

export const fetchUsersSuccess = users => ({
  type: USERS_LIST_FETCH_SUCC,
  payload: { users },
});

export const fetchUsersFailure = error => ({
  type: USERS_LIST_FETCH_FAIL,
  payload: { error },
});

export const addUser = user => ({
  type: USERS_ADD,
  payload: { user },
});

export const deleteUser = user => ({
  type: USERS_DELETE,
  payload: { user },
});

export const updateUser = user => ({
  type: USERS_UPDATE,
  payload: { user },
});
