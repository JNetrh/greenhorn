export const LIST_FETCH_USERS = 'LIST_FETCH_USERS';
export const LIST_FETCH_USERS_SUCCESS = 'LIST_FETCH_USERS_SUCCESS';
export const LIST_FETCH_USERS_FAILURE = 'LIST_FETCH_USERS_FAILURE';

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

export const startFetchUsers = () => (dispatch, getState, { api }) => {
  dispatch(fetchUsers());
  api
    .get('user')
    .then(({ data }) => {
      console.log(data);
      const { USERS } = data;
      dispatch(fetchUsersSuccess(USERS));
    })
    .catch(() => {
      dispatch(fetchUsersFailure('Error fetching users'));
    });
};
