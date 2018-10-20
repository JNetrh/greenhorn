import { GET_ACTIVE_MENU_ITEM, SET_ACTIVE_MENU_ITEM } from './actions';

const initialState = {
  activeMenu: ['1'],
};

export const activeMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_MENU_ITEM: {
      console.log(state);
      return { ...state };
    }
    case SET_ACTIVE_MENU_ITEM: {
      console.log(action);
      console.log(state);
      const { activeMenu } = action.payload;
      return { ...state, activeMenu };
    }

    default:
      return state;
  }
};

export const getActiveMenuItem = state => state.activeMenu;
