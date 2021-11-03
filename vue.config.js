
const path = require('path');
module.exports = {
    publicPath: '/',
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass')
            }
        }
    },
    chainWebpack: config => {
        if (process.env.npm_config_report) {
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
        }
    }
};
