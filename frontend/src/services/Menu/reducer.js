import {
  GET_ACTIVE_MENU_ITEM,
  GET_ACTIVE_SUB_MENU_ITEM,
  SET_ACTIVE_MENU_ITEM,
  SET_ACTIVE_SUB_MENU_ITEM,
} from './actions';

const initialState = {
  activeMenu: ['1'],
  activeSubMenu: [],
};

export const activeMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVE_MENU_ITEM: {
      return { ...state };
    }
    case GET_ACTIVE_SUB_MENU_ITEM: {
      return { ...state };
    }
    case SET_ACTIVE_MENU_ITEM: {
      const { activeMenu } = action.payload;
      return { ...state, activeMenu };
    }
    case SET_ACTIVE_SUB_MENU_ITEM: {
      console.log(action);
      const { activeSubMenu } = action.payload;
      return { ...state, activeSubMenu };
    }

    default:
      return state;
  }
};
