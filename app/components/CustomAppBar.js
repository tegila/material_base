import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeft from 'material-ui-icons/ChevronLeft';
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
  const { classes, children, top_right_button, toggle_drawer, history } = props;

  const top_left_button = history.location.pathname.localeCompare('/') ? (
    <IconButton className={classes.menuButton} aria-label="Menu" onClick={() => setTimeout(() => history.goBack(), 300)}>
      <ChevronLeft />
    </IconButton>
  ) : (
    <IconButton className={classes.menuButton} aria-label="Menu" onClick={() => setTimeout(() => toggle_drawer(), 300)}>
      <MenuIcon />
    </IconButton>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        { top_left_button }
        <Typography type="title" align="center">
          Salesforce
        </Typography>
        { top_right_button }
      </Toolbar>
      <CustomDrawer />
      {children}
    </AppBar>
  );
};

CustomAppBar.defaultProps = {
  children: false,
  top_right_button: false,
};

CustomAppBar.propTypes = {
  children: PropTypes.node,
  top_right_button: PropTypes.node,
  classes: PropTypes.object.isRequired,
  toggle_drawer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      drawer: state.app.drawer,
    }),
    { toggle_drawer }
  ),
)(withRouter(CustomAppBar));
