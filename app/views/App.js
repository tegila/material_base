import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Question from './Question';

const styles = {
  root: {
    width: '100%',
  }
};

const App = () => {
  return (
    <div className={styles.root}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/question/:id" exact component={Question} />
    </div>
  );
};

export default App;
