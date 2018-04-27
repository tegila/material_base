import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Session from './Session';

const styles = {
  root: {
    width: '100%',
  }
};

const App = () => {
  return (
    <div className={styles.root}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/sessions/:id" exact component={Session} />
    </div>
  );
};

export default App;
