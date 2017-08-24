var webpack = require('webpack')
var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports  = {
    entry : path.resolve(__dirname,'src/index.js'),
    output: {
        path : path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query : {
                    presets: ['react','es2015','stage-2']
                }
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}