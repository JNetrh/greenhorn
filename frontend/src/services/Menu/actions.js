export const GET_ACTIVE_MENU_ITEM = 'GET_ACTIVE_MENU_ITEM';
export const GET_ACTIVE_SUB_MENU_ITEM = 'GET_ACTIVE_MENU_ITEM';
export const SET_ACTIVE_MENU_ITEM = 'SET_ACTIVE_MENU_ITEM';
export const SET_ACTIVE_SUB_MENU_ITEM = 'SET_ACTIVE_SUB_MENU_ITEM';

export const getActiveMenuItem = () => ({
  type: GET_ACTIVE_MENU_ITEM,
});

export const getActiveSubMenuItem = () => ({
  type: GET_ACTIVE_SUB_MENU_ITEM,
});

export const setActiveMenuItem = activeMenu => ({
  type: SET_ACTIVE_MENU_ITEM,
  payload: { activeMenu },
});

export const setActiveSubMenuItem = activeSubMenu => ({
  type: SET_ACTIVE_SUB_MENU_ITEM,
  payload: { activeSubMenu },
});
