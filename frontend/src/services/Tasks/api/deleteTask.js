// import { message } from 'antd';
import { deleteTask, deleteTaskSuccess, deteleTaskFailure } from '../actions';
import history from '../../../history';

export const startDeleteTask = task => async (dispatch, getState, { api }) => {
  dispatch(deleteTask());
  try {
    const { data } = await api.delete(`task/${task.id}`);
    await dispatch(deleteTaskSuccess(data));
    history.push('/task/list');
  } catch (error) {
    dispatch(deteleTaskFailure('error deleting task'));
  }
};
