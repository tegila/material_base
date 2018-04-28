import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import Dashboard from './Dashboard';
import Session from './Session';
import { bootstrap } from '../actions/app';

const styles = {
  root: {
    width: '100%',
  }
};

const App = ({ bootstrap, run }) => {
  if (!run) bootstrap();

  return (
    <div className={styles.root}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/sessions/:id" exact component={Session} />
    </div>
  );
};

App.propTypes = {
  run: PropTypes.bool.isRequired,
  bootstrap: PropTypes.func.isRequired,
};

export default withRouter(connect(
  state => ({
    run: state.app.run,
  }),
  { bootstrap }
)(App));
