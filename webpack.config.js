const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackEnv) => {
    const isDevelopment = webpackEnv === 'development' ? true : false;

    return {
        mode: 'development',
        devtool: 'eval',
        resolve: {
            extensions: ['.tsx', '.ts', '.js' ]
        },
    
        entry: {
            bundle: ['./src/index.tsx']
        }, // 입력
        module: {
            rules: [{
                test: /\.tsx?$/,
                exclude: '/node_modules',
                use: [
                    'cache-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: isDevelopment ? true : false,
                        }
                    }
                ]
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
}