const webpack = require('webpack');

module.exports = function(service) {
  service.config(chainWebpackConfig => {
    chainWebpackConfig
      .mode('development')
      .devtool('inline-source-map')
      .entry('main')
        .add(
          `webpack-dev-server/client?http://127.0.0.1:${service.port}/sockjs-node`
        )
        .add('webpack/hot/dev-server')
        .add('react-hot-loader/patch')
        .end()
      .output
        .path(service.resolvePath('dist'))
        .publicPath('/')
        .filename('bundle.js')
        .end()
      .plugin('hot')
        .use(webpack.HotModuleReplacementPlugin)
        .end();

      chainWebpackConfig.resolve
        .alias
          .set('react-dom', '@hot-loader/react-dom');

      chainWebpackConfig.plugin('define')
        .use(webpack.DefinePlugin, [{
          'process.env': {
            NODE_ENV: '"development"',
          }
        }]);
  });
};
