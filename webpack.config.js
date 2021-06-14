const path = require('path');

module.exports = () => ([{
    target: 'node',
    entry: './index.ts',
    module: {
        rules: [{
            test: /\.ts?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            loader: 'babel-loader',
        }, ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            type: 'umd',
        },
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
}])