import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../services/Login/reducer';
import { AddUserReducer } from '../services/AddUser/reducer';
import { EmployeesListReducer } from '../services/EmployeesList/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    addUser: AddUserReducer,
    listEmployees: EmployeesListReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
