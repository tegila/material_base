import persist from '../config/persistence';

export function bootstrap() {
  persist.on('connect', () => {
    console.log('connected');
  });

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
