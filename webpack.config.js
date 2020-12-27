let path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let config = {
    entry: './src/main.js',
    context: path.resolve(__dirname),
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    devServer: {
        contentBase: __dirname + '/dist',
        compress: true,
        historyApiFallback: true,
        hot: true,
        index: 'public/index.html'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        //modules: ["node_modules"],
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    //'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],

    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '/src/css/style.css'
        })
    ],

}

module.exports = config;

