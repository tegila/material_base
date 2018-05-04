import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { Worker } from 'mdi-material-ui';

import CustomAppBar from '../components/CustomAppBar';

import { load_todos } from '../actions/todos';

const styles = {
  root: {
    width: '100%',
  },
};

function Dashboard({ classes, loading, todos, load_todos, history }) {
  if (!loading) load_todos();

  const handleToggle = (todo) => {
    console.log("todos: ", todo);
    history.push(`/todo/${todo._id}`);
  };

  console.log("RENDERRRRRR!!!!!");
  return (
    <div className={classes.root}>
      <CustomAppBar />
      <List>
        { todos.map((todo) => {
          return (
            <ListItem
              key={todo._id}
              role={undefined}
              dense
              button
              className={classes.listItem}
              onClick={() => setTimeout(() => handleToggle(todo), 300)}
            >
              <Checkbox
                checked={false}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={todo.hello} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <Worker />
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
