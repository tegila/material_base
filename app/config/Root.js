import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import AppBar from '../components/AppBar';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppBar} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
};

export default Root;

