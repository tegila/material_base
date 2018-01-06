import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: '100%',
  },
};

function Orders() {
  return <h3><Link to="/order/123">Message </Link></h3>;
}

export default withStyles(styles)(Orders);
