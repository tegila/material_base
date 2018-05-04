import React from 'react';
import { HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import yellow from 'material-ui/colors/yellow';

import rootReducer from '../reducers';
import history from './history';

import App from '../views/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blue,
  },
  typography: {
    fontSize: 20,
  },
  status: {
    danger: 'orange',
  }
});

const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </HashRouter>
    </Provider>
  );
};

export default Root;
