import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarBorder from '@material-ui/icons/StarBorder';

import { toggle_drawer } from '../actions/app';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 2,
    textDecoration: 'none'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

function CustomDrawer({ classes, drawer, toggle_drawer }) {
  return (
    <Drawer
      open={drawer}
      onClose={() => toggle_drawer({ open: false })}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        className={classes.drawerHeader}
        tabIndex={0}
        role="button"
        onClick={() => toggle_drawer({ open: false })}
        onKeyDown={() => toggle_drawer({ open: false })}
      >
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Perguntas" />
            </ListItem>
          </Link>
          <List component="div" className={classes.nested}>
            <Link to="/question/12" style={{ textDecoration: 'none' }}>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText inset primary="Não respondidas" />
              </ListItem>
            </Link>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Historico" />
            </ListItem>
          </List>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Usuário" />
          </ListItem>
        </List>
        <Divider />
      </div>
    </Drawer>
  );
}

CustomDrawer.propTypes = {
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
)(CustomDrawer);
