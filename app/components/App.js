import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

import img from '../assets/images/react_logo_512x512.png';
import Login from './Login';
import Order from './Order';
import Orders from './Orders';
import CustomDrawer from './CustomDrawer';

const App = () => {
  let open_drawer = null;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={() => open_drawer.handleToggle()}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit">
            Title
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <CustomDrawer ref={(ref) => { open_drawer = ref; }} />
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
