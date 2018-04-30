import { TOGGLE_DRAWER, NEW_SESSIONS, NEW_STATUS, BOOTSTRAP } from '../reducers/constants';
import Store from '../../../redux-store-mongodb/index';

const host = process.env.THOST || "https://localhost:3000";
console.log(host);

let store = null;

export function bootstrap() {
  store = Store(host, {
    publicKey: "MpZfc/HM0OZ5JyNRdrfQOHABhZTaIVrfaRa0VTB65DE=",
    secretKey: "45w67HOo4GfYpHiYVEF+8DdyKjrQFofKXVEFK6joOiYyll9z8czQ5nknI1F2t9A4cAGFlNohWt9pFrRVMHrkMQ=="
  });

  store.on('connect', () => {
    console.log('connected');
    store.query('test/session', { });
  });
  return {
    type: BOOTSTRAP
  };
}

export function toggle_drawer(state) {
  return {
    type: TOGGLE_DRAWER,
    open: state ? state.open : undefined
  };
}

export function new_status(status = true) {
  return {
    type: NEW_STATUS,
    status
  };
}

export function new_session(session) {
  return {
    type: NEW_SESSIONS,
    session
  };
}

export function load_sessions() {
  return (dispatch) => {
    dispatch(new_status());
    store.on('test/session', (session) => {
      console.log("session: ----> ", session.payload);
      dispatch(new_session(session.payload));
    });
  };
}

export function save_session(session) {
  return () => {
    console.log('action app: (save session) ', session);
    store.update('test/session', {
      target: {
        _id: session._id
      },
      data: session
    });
  };
}
