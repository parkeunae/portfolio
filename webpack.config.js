const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        bundle: ['./src/index']
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: '/node_modules',
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            }
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    }, // 출력
    devServer: {
        publicPath: '/',
        hot: true,
        open: true,
    }
}