const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (webpackEnv) => {
    const isDevelopment = webpackEnv === 'development' ? true : false;

    return {
        mode: 'development',
        devtool: 'inline-source-map', // https://perfectacle.github.io/2016/11/14/Webpack-devtool-option-Performance/
        resolve: {
            extensions: ['.tsx', '.ts', '.js' ]
        },
    
        entry: {
            bundle: ['./src/index']
        }, // 입력
        target: ['web', 'es5'],
        module: {
            rules: [{
                test: /\.tsx?$/,
                exclude: '/node_modules',
                use: [
                    'cache-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                [
                                    '@babel/plugin-transform-runtime'
                                ]
                            ],
                            presets: [
                                [
                                    '@babel/preset-env', {
                                        targets: {
                                            browsers: ['last 1 version', 'ie 11']
                                        }
                                    }
                                ],
                                '@babel/preset-react'
                            ]
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }, {
                test: /\.s?css$/,
                exclude: '/node_modules',
                use: [
                    'cache-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'app.css'
            }),
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js',
        }, // 출력
        devServer: {
            publicPath: '/',
            open: true,
        }
    }
}