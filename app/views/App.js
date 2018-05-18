import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Dashboard from './Dashboard';
import Todo from './Todo';
import { bootstrap } from '../actions/app';

const styles = {
  root: {
    width: '100%',
  }
};

const App = ({ bootstrap, running }) => {
  if (!running) {
    console.log(running);
    bootstrap();
  }

  return (
    <div className={styles.root}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/todo/:id" exact component={Todo} />
    </div>
  );
};

App.propTypes = {
  running: PropTypes.bool.isRequired,
  bootstrap: PropTypes.func.isRequired,
};

export default withRouter(connect(
  state => ({
    running: state.app.running,
  }),
  { bootstrap }
)(App));
