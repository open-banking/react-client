
const proxy = require('http-proxy-middleware');
const cors = require('cors');

// pure react developer target is https://obsignin.lightapi.net

// module.exports = function(app) {
//   app.use(cors());
//   app.use(proxy('/accounts', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/balances', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/beneficiaries', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/direct-debits', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/offers', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/parties', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/products', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/scheduled-payments', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/standing-orders', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/statements', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/transactions', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/authorization', { target: 'https://obsignin.lightapi.net', secure: false }));
//   app.use(proxy('/logout', { target: 'https://obsignin.lightapi.net', secure: false }));
// };

// full stack developer use saas light-oauth2. target is ob.lightapi.net

// module.exports = function(app) {
//   var corsOptions = {
//     origin: 'https://login.lightapi.net',
//     credentials: true,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }
//   app.use(proxy('/accounts', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/balances', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/beneficiaries', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/direct-debits', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/offers', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/parties', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/products', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/scheduled-payments', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/standing-orders', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/statements', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/transactions', { target: 'https://login.lightapi.net', secure: false }));

//   app.use(cors(corsOptions));
//   app.use(proxy('/authorization', { target: 'https://login.lightapi.net', secure: false }));
//   app.use(proxy('/logout', { target: 'https://login.lightapi.net', secure: false }));
// };

module.exports = function(app) {
  var corsOptions = {
    origin: 'https://login.lightapi.net',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));

  app.use(proxy('/accounts', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/balances', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/beneficiaries', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/direct-debits', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/offers', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/parties', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/products', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/scheduled-payments', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/standing-orders', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/statements', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/transactions', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/authorization', { target: 'https://login.lightapi.net', secure: false }));
  app.use(proxy('/logout', { target: 'https://login.lightapi.net', secure: false }));
};

