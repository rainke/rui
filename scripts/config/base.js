const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function(service) {
  service.config(chainWebpackConfig => {
    chainWebpackConfig
      .entry('main')
        .add('./src/index.tsx')
        .end()
      .module
        .rule('js')
          .test(/\.js$/)
          .exclude
            .add(/@babel(?:\/|\\{1,2})runtime/)
            .add(/node_modules/)
            .end()
          .use('babel-loader')
            .loader('babel-loader');

    chainWebpackConfig.resolve
      .extensions
        .merge(['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'])
        .end()
      .modules
        .add('node_modules')
        .end()
      .alias
        .set('@', service.resolvePath('src'))
        .set('assets', service.resolvePath('src/assets'))
        .set('components', service.resolvePath('src/components'))
        .set('i18n', service.resolvePath('src/i18n'))
        .set('ui', service.resolvePath('src/ui'))
        .set('util', service.resolvePath('src/util'))
        .set('views', service.resolvePath('src/views'))
        .set('routes', service.resolvePath('src/routes'))

    chainWebpackConfig
      .module
        .rule('ts')
          .test(/\.tsx?$/)
          .use('babel-loader')
            .loader('babel-loader');

    chainWebpackConfig
      .module
        .rule('mjs')
          .test(/\.mjs?$/)
          .include
            .add(/node_modules/)
            .end()
          .type('javascript/auto')
          .use('babel-loader')
            .loader('babel-loader');

    chainWebpackConfig.module
      .rule('images')
        .test(/\.(bmp|gif|jpe?g|png)$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: 10000,
            fallback: {
              loader: 'file-loader',
              options: {
                name:'images/[name].[ext]'
              }
            }
          });

    chainWebpackConfig.module
      .rule('svg')
      .test(/\.(svg)(\?.*)?$/i)
        .use('file-loader')
          .loader('file-loader')
          .options({
            name:'images/[name].[ext]'
          });

    chainWebpackConfig.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('file-loader')
          .loader('file-loader')
          .options({
            name:'fonts/[name].[ext]'
          });

    chainWebpackConfig.module
      .rule('media')
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/)
        .use('file-loader')
          .loader('file-loader')
          .options({
            name:'media/[name].[ext]'
          });

    chainWebpackConfig.node
      .merge({
        setImmediate: false,
        process: 'mock',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
      });

    chainWebpackConfig
      .plugin('html')
        .use(HtmlWebpackPlugin, [{
          template: 'public/index.html',
          inject: true,
          minify: true
        }]);

    chainWebpackConfig
      .plugin('ts-check')
        .use(ForkTsCheckerWebpackPlugin);

  });
};
