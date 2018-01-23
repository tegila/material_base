import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

import CustomDrawer from './CustomDrawer';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const CustomAppBar = (props) => {
  const { classes } = props;
  let open_drawer = null;

  const debug = () => {
    open_drawer.handleToggle();
    console.log(open_drawer);
    console.log(open_drawer.render());
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => debug()}>
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" className={classes.flex}>
          Salesforce
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
      <CustomDrawer ref={(ref) => { open_drawer = ref; }} />
      {props.children}
    </AppBar>
  );
};

CustomAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomAppBar);
