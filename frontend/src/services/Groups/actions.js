export const GROUPS_FETCH = 'GROUPS_FETCH';
export const GROUPS_FETCH_SUCC = 'GROUPS_FETCH_SUCC';
export const GROUPS_FETCH_FAIL = 'GROUPS_FETCH_FAIL';
export const GROUPS_ADD = 'GROUPS_ADD';
export const GROUPS_UPDATE = 'GROUPS_UPDATE';
export const GROUPS_DELETE = 'GROUPS_DELETE';

export const fetchGroups = () => ({
  type: GROUPS_FETCH,
});

export const fetchGroupsSuccess = groups => ({
  type: GROUPS_FETCH_SUCC,
  payload: { groups },
});

export const fetchGroupsFailure = error => ({
  type: GROUPS_FETCH_FAIL,
  payload: { error },
});

export const addGroup = group => ({
  type: GROUPS_ADD,
  payload: { group },
});

export const deleteGroup = group => ({
  type: GROUPS_DELETE,
  payload: { group },
});

export const updateGroup = group => ({
  type: GROUPS_UPDATE,
  payload: { group },
});
