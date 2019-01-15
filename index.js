require('babel-register')({
  presets: [ 'env', 'stage-0' ],
});
require("babel-polyfill");

module.exports = require('./server.js')
