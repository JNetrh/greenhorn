import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../services/Auth/reducer';
import { UsersListReducer } from '../services/Users/reducer';
import { assignedTasksReducer } from '../services/AssignedTasks/reducer';
import { reviewTasksReducer } from '../services/ReviewTasks/reducer';
import { tasksReducer } from '../services/Tasks/reducer';
import { GroupsListReducer } from '../services/Groups/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    users: UsersListReducer,
    groups: GroupsListReducer,
    tasks: tasksReducer,
    assignedTasks: assignedTasksReducer,
    reviewTasks: reviewTasksReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
