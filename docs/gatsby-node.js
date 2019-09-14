exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../packages/rui-core/src'),
        'node_modules'
      ]
    },
    module: {
      rules: [{ test: /\.mdx?$/, laoder: 'raw-loader' }]
    }
  });
};
