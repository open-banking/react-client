const proxy = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function(app) {
  app.use(cors());
  app.use(proxy('/accounts', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/balances', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/beneficiaries', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/direct-debits', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/offers', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/parties', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/products', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/scheduled-payments', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/standing-orders', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/statements', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/transactions', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/authorization', { target: 'https://ob.lightapi.net', secure: false }));
  app.use(proxy('/logout', { target: 'https://ob.lightapi.net', secure: false }));
};
