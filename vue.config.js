const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://298399317.xyz/ldk/api',
    // devServer: {
    //   host: 'localhost',
    //   port: 8080,
    //   proxy: {
    //     '/api': {
    //       target: 'https://298399317.xyz/ldk',// 要跨域的域名
    //       changeOrigin: true, // 是否开启跨域
    //     },
    //     '/': {
    //       target: 'https://298399317.xyz',// 要跨域的域名
    //       changeOrigin: true, // 是否开启跨域
    //     }
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === 'production' ? "/ldk/" : "/"
})
