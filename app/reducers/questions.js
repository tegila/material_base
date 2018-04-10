import { TOGGLE_QUESTION_SELECT } from './constants';

// TODO: THIS IS A COPY-PAST SOURCE, NOTHING DONE HERE
export function questions(
  state = {
    drawer: false
  },
  action
) {
  switch (action.type) {
    case TOGGLE_QUESTION_SELECT: {
      return Object.assign({}, state, {
        drawer: action.open || !state.drawer,
      });
    }
    default:
      return state;
  }
}
