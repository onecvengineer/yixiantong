const { defineConfig } = require('@vue/cli-service');
const { resolve } = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'styles': resolve('src/assets/style'),
        'js': resolve('src/assets/js'),
        'components': resolve('src/components'),
        'data': resolve('src/assets/data'),
        'utils': resolve('src/utils'),
      },
    },
  },
});
