import { TOGGLE_DRAWER } from './constants';

export function app(
  state = {
    drawer: false
  },
  action
) {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return Object.assign({}, state, {
        drawer: action.open || !state.drawer,
      });
    }
    default:
      return state;
  }
}
