import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import * as colors from 'material-ui/colors';

import CustomDrawer from './CustomDrawer';

import { toggle_drawer } from '../actions/app';

const styles = {
  root: {
    width: '100%',
  },
  button: {
    'background-color': colors.yellow[400],
    color: '#000'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const CustomAppBar = (props) => {
  const { classes, children, drawer, toggle_drawer } = props;
  console.log(drawer);
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton className={classes.menuButton} aria-label="Menu" onClick={() => toggle_drawer()}>
          <MenuIcon />
        </IconButton>
        <Typography type="title" align="center">
          Salesforce
        </Typography>
      </Toolbar>
      <CustomDrawer />
      {children}
    </AppBar>
  );
};

CustomAppBar.defaultProps = {
  children: false
};

CustomAppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  drawer: PropTypes.bool.isRequired,
  toggle_drawer: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      drawer: state.app.drawer,
    }),
    { toggle_drawer }
  ),
)(CustomAppBar);
