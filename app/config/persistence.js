import Store from '../../libs/mongo.io/client';

const host = process.env.THOST || "https://test.tegila.com.br";
const persist = Store(host);

const key = {
  publicKey: "HBYfcIpXD82Q9qyNv0yKqCgWCQMQqgrLO3srerdohRA=",
  secretKey: "0ZCbuXRaL7Liw3GoRKu2Yt2RqRReG4A/964y1Wl+YUkcFh9wilcPzZD2rI2/TIqoKBYJAxCqCss7eyt6t2iFEA=="
};

persist.connect(key.secretKey);

export default persist;
