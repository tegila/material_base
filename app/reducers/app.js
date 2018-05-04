const initial_state = {
  running: false,
  drawer: false,
};

export function app(state = initial_state, action) {
  switch (action.type) {
    case 'BOOTSTRAP': {
      return Object.assign({}, state, {
        running: true
      });
    }
    case 'TOGGLE_DRAWER': {
      return Object.assign({}, state, {
        drawer: action.open || !state.drawer,
      });
    }
    default:
      return state;
  }
}
