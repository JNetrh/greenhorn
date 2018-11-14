import { SET_ACTIVE_USER, USER_UPDATE } from './actions';

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
    case USER_UPDATE:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          surname: action.payload.surname,
        }
      };
    default:
      return state;
  }
};
