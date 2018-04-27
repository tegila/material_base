import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import CustomAppBar from '../components/CustomAppBar';
const pStyle = {
  margin: "15px"
};
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
  }),
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },

});

function Session({ match, classes }) {
  return (
    <div>
      <CustomAppBar />
      <Paper className={classes.root}>
        <div className={classes.container}>
          <TextField
            fullWidth={true}
            disabled={true}
            label="Código"
            defaultValue={match.params.id}
            id="bootstrap-input"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
          <TextField
            fullWidth={true}
            label="Nome"
            id="bootstrap-input"
            InputProps={{
              disableUnderline: true,
              classes: {
                root: classes.bootstrapRoot,
                input: classes.bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: classes.bootstrapFormLabel,
            }}
          />
        </div>
        <div className={classes.container}>
          <Button variant="raised"
            color="secondary"
            fullWidth={true}
            className={classes.button}
            style={pStyle}>
            Editar
          </Button>
        </div>
      </Paper>
    </div>
  );
}

Session.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Session);
