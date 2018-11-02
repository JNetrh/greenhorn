import {
  GROUPS_FETCH,
  GROUPS_FETCH_SUCC,
  GROUPS_FETCH_FAIL,
  GROUPS_ADD,
} from './actions';

const initialState = {
  groups: [],
  isLoading: false,
  error: null,
  fetched: false,
};

export const GroupsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GROUPS_FETCH:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case GROUPS_FETCH_SUCC: {
      const { groups } = action.payload;
      return {
        ...state,
        isLoading: false,
        fetched: true,
        error: null,
        groups: [...state.groups, ...groups],
      };
    }

    case GROUPS_FETCH_FAIL: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        groups: null,
        error,
      };
    }

    case GROUPS_ADD: {
      const { group } = action.payload;
      return {
        ...state,
        groups: [...state.groups, group],
      };
    }

    default:
      return state;
  }
};
