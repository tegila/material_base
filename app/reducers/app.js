import { TOGGLE_DRAWER, NEW_STATUS, NEW_SESSIONS, BOOTSTRAP } from './constants';

const initial_state = {
  run: false,
  status: false,
  drawer: false,
  sessions: []
};

export function app(state = initial_state, action) {
  // console.log(action);
  switch (action.type) {
    case BOOTSTRAP: {
      return Object.assign({}, state, {
        run: true
      });
    }
    case NEW_STATUS: {
      return Object.assign({}, state, {
        status: true
      });
    }
    case TOGGLE_DRAWER: {
      return Object.assign({}, state, {
        drawer: action.open || !state.drawer,
      });
    }
    case 'QUERY': {
      console.log(NEW_SESSIONS, action);
      return Object.assign({}, state, {
        sessions: [...state.sessions, action.data]
      });
    }
    case 'UPDATE': {
      return Object.assign({}, state, state.sessions.map((session) => {
        if (session._id === action.data._id) return action.data;
        return session;
      }));
    }
    default:
      return state;
  }
}
