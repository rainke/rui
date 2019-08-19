'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const Service = require('./Service');

const env = process.argv[2] || 'production'
process.env.BABEL_ENV = env;
process.env.NODE_ENV = env;
process.on('unhandledRejection', err => {
  throw err;
});

const service = new Service('prod');
const webpackConfig = service.resolveWebpackConfig();

const compiler = webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }

  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
});
