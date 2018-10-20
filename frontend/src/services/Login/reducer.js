import { SET_ACTIVE_USER } from './actions';

const initialState = {
  user: null,
  isLogged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        user: action.user,
        isLogged: true,
      };
    default:
      return state;
  }
};
