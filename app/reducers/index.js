import { combineReducers } from 'redux';

import { app } from './app';
import { todos } from './todos';

const rootReducer = combineReducers({
  app,
  todos
});

export default rootReducer;
