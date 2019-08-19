const Config = require('webpack-chain');
const path = require('path');

class Service {
  constructor(env = 'dev', context = process.cwd()) {
    this.env = env;
    this.context = context;
    this.port = 8887;
    this.chainWebpackConfig = new Config();
    this.init();
  }

  init() {
    this.resolveChainableWebpackConfig();
  }

  resolveChainableWebpackConfig() {
    const registerBaseConfig = require('./config/base');
    registerBaseConfig(this);
    const registerCSSConfig = require('./config/css');
    registerCSSConfig(this);
    if (this.env === 'dev') {
      const registerDevConfig = require('./config/dev');
      registerDevConfig(this);
    } else if (this.env === 'prod') {
      const registerProdConfig = require('./config/prod');
      registerProdConfig(this);
    }
  }

  config(apply) {
    apply(this.chainWebpackConfig);
  }

  resolveWebpackConfig() {
    return this.chainWebpackConfig.toConfig();
  }

  resolvePath(...pathnames) {
    return path.resolve(this.context, ...pathnames);
  }
}

module.exports = Service;
