const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                },
                            ],
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'classic',
                                },
                            ],
                        ],
                        plugins: [
                            [
                                'babel-plugin-transform-react-jsx',
                                {
                                    pragma: 'RohanReact.createElement',
                                    pragmaFrag: 'React.Fragment',
                                },
                            ],
                        ],
                    },
                },
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Rohan React',
        filename: 'index.html',
        template: 'src/index.html'
    })],
}