import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import img from '../assets/images/react_logo_512x512.png';

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

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit} noValidate>
        <Paper className={classes.shadow0}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <Button color="contrast">Login</Button>
            </Toolbar>
          </AppBar>
        </Paper>
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
