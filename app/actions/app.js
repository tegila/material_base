import { TOGGLE_DRAWER } from '../reducers/constants';

export function toggle_drawer(state) {
  return {
    type: TOGGLE_DRAWER,
    open: state ? state.open : undefined
  };
}
