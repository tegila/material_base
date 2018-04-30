import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import grey from 'material-ui/colors/grey';

import CustomAppBar from '../components/CustomAppBar';
import { save_session } from '../actions/app';

const pStyle = {
  marginTop: '15px'
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    backgroundColor: grey[100],
    padding: theme.spacing.unit * 2,
    minHeight: '85vh',
    maxHeight: '85vh',
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
    width: '500px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
    fontFamily: 'Roboto'
  },
  button: {
    width: '100%'
  }
});

function Session({ match, classes, sessions, save_session }) {
  const session = sessions.find((session) => {
    return (session._id === match.params.id);
  });
  const _session = Object.assign({}, session);

  const buttonClickHandler = () => {
    console.log(_session);
    save_session(_session);
  };

  const handleChange = (field, value) => {
    _session[field] = value;
  };

  return (
    <div className={classes.root}>
      <CustomAppBar />
      <Paper className={classes.paper}>
        <div className={classes.container}>
          <TextField
            // fullWidth={true}
            // disabled={true}
            label="Código"
            defaultValue={_session._id}
            onChange={(e) => handleChange('_id', e.target.value)}
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
            // fullWidth={true}
            label="Hello"
            id="bootstrap-input"
            defaultValue={_session.hello}
            onChange={(e) => handleChange('hello', e.target.value)}
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
          <Button
            variant="raised"
            color="secondary"
            // fullWidth={true}
            className={classes.button}
            style={pStyle}
            onClick={() => buttonClickHandler(session)}
          >
            Salvar
          </Button>
        </div>
      </Paper>
    </div>
  );
}

Session.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  sessions: PropTypes.array.isRequired,
  save_session: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      sessions: state.app.sessions,
    }),
    { save_session }
  ),
)(Session);
