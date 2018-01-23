import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import MercadoLivre from 'mercadolivre';
import img from '../assets/images/react_logo_512x512.png';
import config from '../config';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  paper: {
    'margin-top': 30,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    'margin-top': 20,
    margin: theme.spacing.unit,
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  const state = {
    inputs: {},
  };

  const updateInputValue = (evt) => {
    state.inputs[evt.target.name] = evt.target.value;
    console.log(state.inputs);
  };

  const handleSubmit = (event) => {
    // console.log('handleSubmit', username, password);
    if (!event.target.checkValidity()) {
      console.log({ displayErrors: true });
    }
    event.stopPropagation();
    event.preventDefault();
    return 0;
  };

  let meli = {};
  meli = MercadoLivre(config.meli.client_id, config.meli.client_secret);
  console.log(meli);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} noValidate>
        <Paper className={classes.shadow0}>
          <Grid container className={classes.root}>
            <Grid container spacing={8} alignItems="center" justify="center">
              <div>
                <h2 id="heading">Hello ReactJS</h2>
                <img
                  className="image"
                  style={{ margin: '0.5em' }}
                  height="80"
                  width="80"
                  src={img}
                  alt="React Logo"
                />
              </div>
            </Grid>
            <Grid container spacing={8} alignItems="center" justify="center">
              <TextField type="text" label="Usuário" name="username" value={state.inputs.username} onChange={evt => updateInputValue(evt)} />
            </Grid>
            <Grid container spacing={8} alignItems="center" justify="center">
              <TextField type="text" label="Senha" name="password" value={state.inputs.password} onChange={evt => updateInputValue(evt)} />
            </Grid>
            <Grid container className={classes.button} justify="flex-end">
              <Link to="/orders">
                <Button raised type="submit" color="primary"> Login </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
