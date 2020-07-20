module.exports = {
    entry: {
        app:'./src/index.js'
    },
    output: {
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }
    ]
    },
    devServer: {
        overlay: true
    }
}