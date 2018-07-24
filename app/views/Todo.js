import React from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import grey from 'material-ui/colors/grey';

import CustomAppBar from '../components/CustomAppBar';
import { save_todo, update_todo } from '../actions/todos';

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

function Todo({ match, classes, todos, history, save_todo, update_todo }) {
  const todo = todos.find((todo) => {
    return (todo._id === match.params.id);
  });
  const _todo = Object.assign({}, {
    _id: "",
    hello: ""
  }, todo);
  console.log(save_todo);

  const buttonClickHandler = (_todo) => {
    console.log(_todo);
    if (match.params.id) {
      update_todo(_todo, () => history.push('/'));
    } else {
      save_todo(_todo, () => history.push('/'));
    }
  };

  const handleChange = (field, value) => {
    _todo[field] = value;
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
            defaultValue={_todo._id}
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
            defaultValue={_todo.hello}
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
            onClick={() => buttonClickHandler(_todo)}
          >
            Salvar
          </Button>
        </div>
      </Paper>
    </div>
  );
}

Todo.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  save_todo: PropTypes.func.isRequired,
  update_todo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      todos: state.todos.todos,
    }),
    { save_todo, update_todo }
  ),
)(withRouter(Todo));
