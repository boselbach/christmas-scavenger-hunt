let path = require('path');

const ROOT_DIR = path.resolve(__dirname);
const APP_DIR = `${ROOT_DIR}/src`;
const BUILD_DIR = `${ROOT_DIR}/dist`;

module.exports = {
    entry: {
        "bundle": `${APP_DIR}/index.jsx`
    },
    devtool: "source-map",
    output: {
        path: BUILD_DIR,
        filename: "[name].js"
        
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js", ".scss"]
    }
}