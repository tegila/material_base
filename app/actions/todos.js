export function new_todo(todo) {
  return {
    type: 'query',
    todo
  };
}

export function todo_news(todo) {
  return {
    type: todo.action,
    todo
  };
}

export function load_todos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TODOS' });
  };
}

export function select_todo(todo) {
  return {
    type: 'TOGGLE_SELECT',
    todo
  };
}

export function delete_todo(todo, callback) {
  return () => {
    callback();
  };
}

export function save_todo(todo, callback) {
  return () => {
    callback()
  };
}

export function update_todo(todo, callback) {
  return () => {
    callback();
  };
}
