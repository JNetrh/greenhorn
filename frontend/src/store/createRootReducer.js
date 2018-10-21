import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { reducer as formReducer } from 'redux-form';
import storage from 'redux-persist/lib/storage';

import { authReducer } from '../services/Login/reducer';
import { UsersListReducer } from '../services/Users/reducer';
import { activeMenuReducer } from '../services/Menu/reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    users: UsersListReducer,
    menu: activeMenuReducer,
  });

  return persistReducer(persistConfig, rootReducer);
};
