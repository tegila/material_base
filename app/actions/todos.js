import persist from '../config/persistence';

const COLLECTION = 'test/session';

export function new_todo(todo) {
  return {
    type: 'QUERY',
    data: todo
  };
}

export function todo_news(todo) {
  return {
    type: todo.action,
    data: todo.res
  };
}

export function load_todos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TODOS' });

    persist.on(COLLECTION, (todo) => {
      if (todo.action === 'query') return;
      console.log(todo);
      dispatch(todo_news(todo));
    });
    persist.query(COLLECTION, {})
      .then((data) => data.forEach(todo => dispatch(new_todo(todo))))
      .catch(console.log);
  };
}

export function select_todo(todo) {
  return {
    type: 'TOGGLE_SELECT',
    todo
  };
}

export function delete_todo(todo, callback) {
  return (dispatch) => {
    persist.delete(COLLECTION, todo).then((delete_info) => {
      dispatch({
        type: 'DELETE_RETURN',
        delete_info
      });
      callback();
    });
  };
}

export function save_todo(todo, callback) {
  return (dispatch) => {
    persist.save(COLLECTION, todo).then((todo) => {
      dispatch({
        type: 'SAVE_RETURN',
        todo
      });
      callback();
    });
  };
}

export function update_todo(todo, callback) {
  return (dispatch) => {
    persist.update(COLLECTION, todo).then((update_info) => {
      dispatch({
        type: 'UPDATE_RETURN',
        update_info
      });
      callback();
    });
  };
}
