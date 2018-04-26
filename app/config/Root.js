import React from 'react';
import { HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

import App from '../views/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
