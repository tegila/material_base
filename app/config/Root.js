import React from 'react';
import { HashRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../reducers';

import App from '../views/App';

const store = createStore(rootReducer);

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
