import {
  LIST_FETCH_EMPLOYEES,
  LIST_FETCH_EMPLOYEES_SUCCESS,
  LIST_FETCH_EMPLOYEES_FAILURE,
} from './actions';

const initialState = {
  employees: null,
  isLoading: false,
  error: null,
};

export const EmployeesListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_FETCH_EMPLOYEES:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case LIST_FETCH_EMPLOYEES_SUCCESS: {
      const { employees } = action.payload;

      return {
        ...state,
        isLoading: false,
        error: null,
        employees,
      };
    }

    case LIST_FETCH_EMPLOYEES_FAILURE: {
      const { error } = action.payload;

      return {
        ...state,
        isLoading: false,
        employees: null,
        error,
      };
    }

    default:
      return state;
  }
};

// - selectors - //

export const getEmployees = state => state.employees || [];

export const getIsLoaded = state => state.employees !== null;

export const getIsLoading = state => state.isLoading;

export const getIsError = state => state.error !== null;

export const getError = state => state.error;
