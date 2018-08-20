import React from 'react';
import { HashRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

import rootReducer from '../reducers';

import App from '../views/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger),
);

const theme = createMuiTheme({
  palette: {
    primary: colors.yellow,
    secondary: colors.blue,
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
      <HashRouter>
        <MuiThemeProvider theme={theme}>
          <App />
        </MuiThemeProvider>
      </HashRouter>
    </Provider>
  );
};

export default Root;
