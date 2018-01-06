import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    width: '100%',
  },
};

function Order({ match }) {
  return <h3>Message {match.params.id}</h3>;
}

Order.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withStyles(styles)(Order);
