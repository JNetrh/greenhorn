export const GET_ACTIVE_MENU_ITEM = 'GET_ACTIVE_MENU_ITEM';
export const SET_ACTIVE_MENU_ITEM = 'SET_ACTIVE_MENU_ITEM';

export const getActiveMenuItem = () => ({
  type: GET_ACTIVE_MENU_ITEM,
});

export const setActiveMenuItem = activeMenu => ({
  type: SET_ACTIVE_MENU_ITEM,
  payload: { activeMenu },
});

export const _getActiveMenuItem = payload => async (
  dispatch,
  getState,
  { api },
) => {
  dispatch(getActiveMenuItem());
};

export const _setActiveMenuItem = payload => async (
  dispatch,
  getState,
  { api },
) => {
  dispatch(setActiveMenuItem(payload));
};
