import persist from '../config/persistence';

export function todo_news(todo) {
  return {
    type: todo.type,
    data: todo.data
  };
}

export function load_todos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TODOS' });

    persist.on('test/session', (todo) => {
      dispatch(todo_news(todo));
    });
    persist.query('test/session', {});
  };
}

export function save_todo(todo, callback) {
  return (dispatch) => {
    persist.update('test/session', todo).then((update_info) => {
      dispatch({
        type: 'UPDATE_RETURN',
        update_info
      });
      callback();
    });
  };
}
