import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { Plus, Delete } from 'mdi-material-ui';

import CustomAppBar from '../components/CustomAppBar';

import { load_todos } from '../actions/todos';

const styles = {
  root: {
    width: '100%',
  },
  menuButton: {
    position: 'fixed',
    right: '0px',
    'margin-right': '15px'
  },
};

function Dashboard({ classes, loading, todos, load_todos, history }) {
  if (!loading) load_todos();

  const handleClick = (e, todo, action) => {
    e.stopPropagation();
    setTimeout(() => {
      switch (action) {
        case 'GOTO': {
          return history.push(`/todo/${todo._id}`);
        }
        case 'SELECT': {
          return console.log('SELECT');
        }
        case 'ADD': {
          return console.log('ADD');
        }
        case 'DELETE': {
          return console.log('DELETE');
        }
        default: {
          return false;
        }
      }
    }, 300);
  };

  console.log("RENDERRRRRR!!!!!");
  return (
    <div className={classes.root}>
      <CustomAppBar
        top_right_button={
          <IconButton
            aria-label="Menu"
            className={classes.menuButton}
            onClick={(e) => handleClick(e, null, 'ADD')}
          >
            <Plus />
          </IconButton>
        }
      />
      <List>
        { todos.map((todo) => {
          return (
            <ListItem
              key={todo._id}
              role={undefined}
              dense
              button
              className={classes.listItem}
              onClick={(e) => handleClick(e, todo, 'GOTO')}
            >
              <Checkbox
                checked={false}
                tabIndex={-1}
                disableRipple
                onClick={(e) => handleClick(e, todo, 'SELECT')}
              />
              <ListItemText primary={todo.hello} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <Delete
                    onClick={(e) => handleClick(e, todo, 'DELETE')}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })
      }
      </List>
    </div>
  );
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  load_todos: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      loading: state.todos.loading,
      todos: state.todos.todos,
    }),
    { load_todos }
  ),
)(withRouter(Dashboard));
