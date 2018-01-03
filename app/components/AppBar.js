import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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
  return (
    <div className={classes.root}>
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
            <TextField type="text" label="Usuário" />
          </Grid>
          <Grid container spacing={8} alignItems="center" justify="center">
            <TextField type="text" label="Senha" />
          </Grid>
          <Grid container className={classes.button} justify="flex-end">
            <Button raised color="primary"> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
