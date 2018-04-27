import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import yellow from 'material-ui/colors/yellow';

import rootReducer from '../reducers';

import App from '../views/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blue,
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily:
      '-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
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
