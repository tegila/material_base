import { TOGGLE_DRAWER, NEW_SESSIONS, NEW_STATUS } from '../reducers/constants';
import Store from '../../../redux-store-mongodb/index';

const host = process.env.THOST || "https://localhost:3000";
console.log(host);

const store = Store(host, {
  publicKey: "MpZfc/HM0OZ5JyNRdrfQOHABhZTaIVrfaRa0VTB65DE=",
  secretKey: "45w67HOo4GfYpHiYVEF+8DdyKjrQFofKXVEFK6joOiYyll9z8czQ5nknI1F2t9A4cAGFlNohWt9pFrRVMHrkMQ=="
});

store.on('connect', () => {
  console.log('connected');
});

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
    store.query('test/session', { hello: 'world22' });
  };
}