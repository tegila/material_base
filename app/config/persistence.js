import Store from '../../libs/mongo.io/client';

const host = process.env.THOST || "https://test.tegila.com.br";
const persist = Store(host);

const key = {
  publicKey: "HBYfcIpXD82Q9qyNv0yKqCgWCQMQqgrLO3srerdohRA=",
  secretKey: "42EvDFt4KTG84dblNQ+Kgj8bv0H4T0+vWMJ0DXTFzLRFM4I06+/eoeOL8J1MbEwUD9Dm4KORNr5QBZDDhlp0ZQ=="
};

persist.connect(key.secretKey);

export default persist;
