import React from 'react';
import { Route } from 'react-router-dom';

import img from '../assets/images/react_logo_512x512.png';
import Login from '../components/Login';
import Order from '../components/Order';
import Orders from '../components/Orders';

const App = () => {
  return (
    <div>
      <h2 id="heading">Hello ReactJS</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
      <Route path="/" exact component={Login} />
      <Route path="/orders" exact component={Orders} />
      <Route path="/order/:id" exact component={Order} />
    </div>
  );
};

export default App;
