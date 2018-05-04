const initial_state = {
  loading: false,
  todos: []
};

export function todos(state = initial_state, action) {
  // console.log(action);
  switch (action.type) {
    case 'LOADING_TODOS': {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case 'QUERY': {
      return Object.assign({}, state, {
        todos: [...state.todos, action.data]
      });
    }
    case 'UPDATE': {
      return Object.assign({}, state, {
        todos: state.todos.map((session) => {
          if (session._id === action.data._id) return action.data;
          return session;
        })
      });
    }
    default:
      return state;
  }
}
