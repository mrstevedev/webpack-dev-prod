const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
           {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
           },
           {
            test: /\.scss$/i,
            use: ['style-loader','css-loader', 'sass-loader']
           },
           {
            test: /\.(png|jpg|gif|svg|woff\eot)$/i,
            use: 'file-loader'
           }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    }
}