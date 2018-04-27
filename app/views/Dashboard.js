import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import CustomAppBar from '../components/CustomAppBar';

import { load_sessions } from '../actions/app';

const styles = {
  root: {
    width: '100%',
  },
};

function Dashboard({ classes, status, sessions, load_sessions }) {
  if (!status) load_sessions();
  console.log(sessions, status);
  return (
    <div className={classes.root}>
      <CustomAppBar />
      <h3>DASHBOARD: HELLO MARIO!!!</h3>
      <Link to="/question/12">Pergunta numero 12</Link>
      { sessions.map((session) => {
        return <li key={session._id}> {session._id} </li>;
      }) }
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  status: PropTypes.bool.isRequired,
  sessions: PropTypes.array.isRequired,
  load_sessions: PropTypes.func.isRequired,
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
)(Dashboard);
