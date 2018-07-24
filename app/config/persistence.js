import Store from '../../libs/mongo.io/client/';

const host = process.env.THOST || "https://test.tegila.com.br";

const persist = Store(host);

export default persist;
