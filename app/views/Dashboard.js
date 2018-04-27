import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { Worker } from 'mdi-material-ui';

import CustomAppBar from '../components/CustomAppBar';

import { load_sessions } from '../actions/app';

const styles = {
  root: {
    width: '100%',
  },
};

function Dashboard({ classes, status, sessions, load_sessions, history }) {
  if (!status) load_sessions();

  const handleToggle = (session) => {
    console.log("sessions: ", session);
    history.push(`/sessions/${session._id}`);
  };

  console.log("RENDERRRRRR!!!!!");
  return (
    <div className={classes.root}>
      <CustomAppBar />
      <List>
        { sessions.map((session) => {
          return (
            <ListItem
              key={session._id}
              role={undefined}
              dense
              button
              className={classes.listItem}
              onClick={() => handleToggle(session)}
            >
              <Checkbox
                checked={false}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={session.hello} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <Worker />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })
      }
      </List>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.bool.isRequired,
  sessions: PropTypes.array.isRequired,
  load_sessions: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      status: state.app.status,
      sessions: state.app.sessions,
    }),
    { load_sessions }
  ),
)(withRouter(Dashboard));
