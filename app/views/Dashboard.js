import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import CustomAppBar from '../components/CustomAppBar';

const styles = {
  root: {
    width: '100%',
  },
};

function Dashboard({ classes }) {
  return (
    <div className={classes.root}>
      <CustomAppBar />
      <h3>DASHBOARD: HELLO MARIO!!!</h3>
      <Link to="/question/12">Pergunta numero 12</Link>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);
