import { ADD_USER } from './actions';

const initialState = {
  firstname: null,
  lastname: null,
  email: null,
};

export const AddUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
      };
    default:
      return state;
  }
};
