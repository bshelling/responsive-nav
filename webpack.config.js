const path = require('path')
const miniCSS = require('mini-css-extract-plugin')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [miniCSS.loader,"css-loader","sass-loader"]
            },
            {
                test: /\.(js)$/,
                use: ['babel-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: path.resolve(__dirname, "src/"),
                        publicPath: '../',
                        useRelativePaths: true
                    }
                }]
            }
        ]
    },
    devServer: {
        compress: true,
        contentBase: path.join(__dirname,'dist'),
        port: 9000,
     
    },
    plugins: [new miniCSS({
        filename: 'app.css'
    })]

}