const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (service, options) {
  service.config(chainWebpackConfig => {
    const createCSSRule = (lang, test, loader, options) => {
      function applyLoaders(rule) {
        if(process.env.NODE_ENV !== 'development') {
          rule
            .use('extrct-css-loader')
            .loader(MiniCssExtractPlugin.loader)
            .options ({
              hmr: process.env.NODE_ENV === 'development'
            });
        }

        rule
          .use('style-loader')
          .loader('style-loader');

        rule
          .use('css-loader')
          .loader('css-loader')
          .options({ sourceMap: true });

        rule
          .use('resolve-url-loader')
          .loader('resolve-url-loader')
          .options({ sourceMap: true });

        if (loader) {
          rule
            .use(loader)
            .loader(loader)
            .options({ sourceMap: true, ...options })
        }
      };
      const baseRule = chainWebpackConfig.module.rule(lang).test(test);
      applyLoaders(baseRule);
    }

    createCSSRule('css', /\.css$/)
    createCSSRule('scss', /\.scss$/, 'sass-loader', {
      implementation: require('sass')
    });
    if(process.env.NODE_ENV !== 'development') {
      chainWebpackConfig.plugin('extrace-css').use(MiniCssExtractPlugin, [{
        filename: 'css/[name].css'
      }]);
    }
  });
};
