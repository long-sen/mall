// module.exports = {
//     configureWebpack: {
//         resolve: {
//             alias: {
//                 "assets": "@/assets",
//                 "common": "@/common",
//                 "components": "@/component",
//                 "network": "@/network",
//                 "views": "@/views",
//             }
//         }
//     }
// }

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
  }
}

