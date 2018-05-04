import { TOGGLE_DRAWER, NEW_STATUS, BOOTSTRAP, NEW_SESSIONS } from '../reducers/constants';
import Store from '../../../redux-store-mongodb/index';

const host = process.env.THOST || "https://localhost:3000";
console.log(host);

let store = null;

store = Store(host, {
  publicKey: "MpZfc/HM0OZ5JyNRdrfQOHABhZTaIVrfaRa0VTB65DE=",
  secretKey: "45w67HOo4GfYpHiYVEF+8DdyKjrQFofKXVEFK6joOiYyll9z8czQ5nknI1F2t9A4cAGFlNohWt9pFrRVMHrkMQ=="
});

export function bootstrap() {
  store.on('connect', () => {
    console.log('connected');
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
  console.log(NEW_SESSIONS);
  return {
    type: session.type,
    data: session.data
  };
}

export function load_sessions() {
  return (dispatch) => {
    dispatch(new_status());
    store.on('test/session', (session) => {
      console.log("session: ----> ", session);
      dispatch(new_session(session));
    });
    store.query('test/session', {});
  };
}

export function save_session(session, callback) {
  return (dispatch) => {
    store.update('test/session', session).then((update_info) => {
      dispatch({
        type: 'UPDATE_RETURN',
        update_info
      });
      callback();
    });
  };
}
