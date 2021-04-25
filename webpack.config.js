const path = require('path')
const svelte = require('svelte/compiler')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const basePath = path.resolve(__dirname)
const mode = process.env.NODE_ENV || 'development';
const isProduction = (mode === 'production')

console.log(` # Running Svelte Version ${svelte.VERSION}`)

module.exports = {
    mode,

    entry: {
        bundle: [`${basePath}/src/index.js`]
    },

    resolve: {
        modules: ['src', 'node_modules'],
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },

    output: {
        path: `${basePath}/public/dist`,
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].[id].js'
    },

    devtool: isProduction ? false : 'source-map',

    module: {
        rules: [
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true
                    }
                }
            }, {
                test: /\.(css|scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    optimization: {
        nodeEnv: process.env.NODE_ENV || 'development',
        emitOnErrors: true,
        minimize: isProduction,
        minimizer: [new TerserPlugin({
            exclude: /node_modules/
        })]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],

    devServer: {
        contentBase: `${basePath}/public`,
        stats: 'minimal',
        port: 9000,
        watchOptions: {
            poll: 2000  // reaload each 2sec
        }
    }
}
