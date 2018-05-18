import Store from '../../../redux-store-mongodb/index';

const host = process.env.THOST || "https://localhost:3000";

const persist = Store(host);

export default persist;
