import { TOGGLE_DRAWER, NEW_SESSIONS, NEW_STATUS, BOOTSTRAP } from './constants';

export function app(
  state = {
    run: false,
    status: false,
    drawer: false,
    sessions: []
  },
  action
) {
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
    case NEW_SESSIONS: {
      console.log(action);
      return Object.assign({}, state, {
        sessions: [...state.sessions, action.session]
      });
    }
    default:
      return state;
  }
}
