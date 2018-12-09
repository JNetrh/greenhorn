// import { message } from 'antd';
import {
  fetchGroups,
  fetchGroupsSuccess,
  fetchGroupsFailure,
} from '../actions';

export const startFetchGroups = () => async (dispatch, getState, { api }) => {
  dispatch(fetchGroups());
  // const loader = message.loading('Loading Groups');
  try {
    const { data } = await api.get('group');
    console.log('groups loaded');
    await dispatch(fetchGroupsSuccess(data));
    console.log(data);
    return data;
  } catch (error) {
    dispatch(fetchGroupsFailure('Error fetching groups'));
  }
  // loader();
};
