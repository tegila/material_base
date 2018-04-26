import { TOGGLE_DRAWER, NEW_SESSIONS, NEW_STATUS } from './constants';

export function app(
  state = {
    status: false,
    drawer: false,
    sessions: []
  },
  action
) {
  switch (action.type) {
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
