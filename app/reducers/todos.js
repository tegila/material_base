const initial_state = {
  loading: false,
  selectedTodos: {},
  todos: []
};

export function todos(state = initial_state, action) {
  // if (action.path !== '/test/session') return;
  // console.log(action);
  switch (action.type) {
    case 'LOADING_TODOS': {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case 'TOGGLE_SELECT': {
      return Object.assign({}, state, {
        selectedTodos: Object.assign({}, state.selectedTodos, {
          [action.todo._id]: !state.selectedTodos[action.todo._id]
        })
      });
    }
    case 'query': {
      return Object.assign({}, state, {
        todos: [...state.todos, action.todo]
      });
    }
    case 'save': {
      return Object.assign({}, state, {
        todos: [...state.todos, action.todo.payload]
      });
    }
    case 'update': {
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo._id === action.todo.payload._id) return action.todo.payload;
          return todo;
        })
      });
    }
    case 'remove': {
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => {
          return (todo._id !== action.todo.payload._id);
        })
      });
    }
    default:
      return state;
  }
}
