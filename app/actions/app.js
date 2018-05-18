import persist from '../config/persistence';

export function bootstrap() {
  persist.connect({
    publicKey: "MpZfc/HM0OZ5JyNRdrfQOHABhZTaIVrfaRa0VTB65DE=",
    secretKey: "45w67HOo4GfYpHiYVEF+8DdyKjrQFofKXVEFK6joOiYyll9z8czQ5nknI1F2t9A4cAGFlNohWt9pFrRVMHrkMQ=="
  });
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

