var webpack = require('webpack');

module.exports = {
    entry: {
        index: './htdocs/src/js/index.js'
    },
    output: {
        path: './htdocs/js',
        filename: '[name].js',
    },
    stats: {
        colors: true,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: require('uglify-save-license'),
            },
        }),
    ],
};
