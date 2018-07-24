import persist from '../config/persistence';

export function bootstrap() {
  const key = {
    publicKey: "HBYfcIpXD82Q9qyNv0yKqCgWCQMQqgrLO3srerdohRA=",
    secretKey: "0ZCbuXRaL7Liw3GoRKu2Yt2RqRReG4A/964y1Wl+YUkcFh9wilcPzZD2rI2/TIqoKBYJAxCqCss7eyt6t2iFEA=="
  };

  persist.connect(key.secretKey);
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

