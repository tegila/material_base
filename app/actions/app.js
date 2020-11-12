
export function bootstrap() {

  return {
    type: 'BOOTSTRAP'
  };
}

export function toggle_drawer(state) {
  return {
    type: 'TOGGLE_DRAWER',
    open: state ? state.open : undefined
  };
}
