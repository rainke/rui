const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const path = require('path');
const Service = require('./Service');

const env = process.argv[2] || 'development';
process.env.BABEL_ENV = env;
process.env.NODE_ENV = env;
process.on('unhandledRejection', err => {
  throw err;
});

const service = new Service();
const webpackConfig = service.resolveWebpackConfig();

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  clientLogLevel: 'warning',
  historyApiFallback: {
    disableDotRule: true,
    rewrites: [{ from: /.*/, to: path.posix.join('/', 'index.html') }]
  },
  hot: true,
  contentBase: service.resolvePath('public'),
  watchContentBase: true,
  compress: false,
  host: 'localhost',
  // open: false,
  overlay: { warnings: false, errors: true }, // 在页面显示编译错误提示
  publicPath: '/',
  proxy: {
    '/socket.io': 'http://47.99.128.32:3999',
    '/mock': 'http://47.99.128.32:3999'
  },
  quiet: false,
  watchOptions: {
    poll: false
  }
});

server.listen(service.port, 'localhost', err => {
  if (err) {
    console.log(err);
  }
});
