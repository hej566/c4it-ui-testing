module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .uses.clear();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();
  },
};
