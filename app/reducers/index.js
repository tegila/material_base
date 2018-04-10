import { combineReducers } from 'redux';

import { app } from './app';
import { questions } from './questions';

const rootReducer = combineReducers({
  app,
  questions
});

export default rootReducer;
