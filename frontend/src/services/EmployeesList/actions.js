export const LIST_FETCH_EMPLOYEES = 'LIST_FETCH_EMPLOYEES';
export const LIST_FETCH_EMPLOYEES_SUCCESS = 'LIST_FETCH_EMPLOYEES_SUCCESS';
export const LIST_FETCH_EMPLOYEES_FAILURE = 'LIST_FETCH_EMPLOYEES_FAILURE';

export const fetchEmployees = () => ({
  type: LIST_FETCH_EMPLOYEES,
});

export const fetchEmployeesSuccess = employees => ({
  type: LIST_FETCH_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const fetchEmployeesFailure = error => ({
  type: LIST_FETCH_EMPLOYEES_FAILURE,
  payload: { error },
});

export const startFetchEmployees = () => (dispatch, getState, { api }) => {
  dispatch(fetchEmployees());
  api
    .get('employee')
    .then(({ data }) => {
      console.log(data);
      const { USERS } = data;
      dispatch(fetchEmployeesSuccess(USERS));
    })
    .catch(() => {
      dispatch(fetchEmployeesFailure('Error fetching employees'));
    });
};
