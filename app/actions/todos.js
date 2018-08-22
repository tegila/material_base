import persist from '../config/persistence';

const COLLECTION = 'test/session';

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

    persist.on(COLLECTION, (todo) => {
      const filter = ["remove", "save", "update"];
      if (!todo.action || (filter.indexOf(todo.action) === -1)) return;
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
  return () => {
    persist.remove(COLLECTION, todo).then(callback);
  };
}

export function save_todo(todo, callback) {
  return () => {
    persist.save(COLLECTION, todo).then(callback);
  };
}

export function update_todo(todo, callback) {
  return () => {
    persist.update(COLLECTION, todo).then(callback);
  };
}
