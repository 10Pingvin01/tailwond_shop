const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (_,argv = {}) =>({
    entry: './src/index.js',
    mode: argv.mode ||'development',
    plugins: [new HtmlWebpackPlugin({
        'template': './src/index.html',
    })],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),
            publicPath: '/public',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "@tailwindcss/postcss"
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
        ],
    },
});