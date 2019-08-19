const webpack = require('webpack');

module.exports = function(service) {
  service.config(chainWebpackConfig => {
    chainWebpackConfig
      .mode('production')
      .devtool('source-map')
      .output
        .filename('js/[name].js');

    chainWebpackConfig.optimization
      .splitChunks({chunks: 'all', automaticNameDelimiter: '.'})
      .runtimeChunk({name: 'runtime'});

    chainWebpackConfig.plugin('define')
      .use(webpack.DefinePlugin, [{
        'process.env': {
          NODE_ENV: '"production"',
        }
      }]);
  });
};
  