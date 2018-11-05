import {
  GROUPS_FETCH,
  GROUPS_FETCH_SUCC,
  GROUPS_FETCH_FAIL,
  GROUPS_ADD,
  GROUPS_DELETE,
  GROUPS_UPDATE,
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
        groups,
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

    case GROUPS_UPDATE: {
      const { group } = action.payload;
      return {
        ...state,
        groups: state.groups.map(curr => (curr.id === group.id ? group : curr)),
      };
    }

    case GROUPS_DELETE: {
      const { group } = action.payload;
      return {
        ...state,
        groups: state.groups.filter(({ id }) => group.id !== id),
      };
    }

    default:
      return state;
  }
};
