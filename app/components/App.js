import React from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Order from './Order';
import Orders from './Orders';

const styles = {
  root: {
    width: '100%',
  }
};

const App = () => {
  return (
    <div className={styles.root}>
      <Route path="/" exact component={Login} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/order/:id" exact component={Order} />
    </div>
  );
};

export default App;
