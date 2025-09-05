const path = require("path");

// Set entry and output to work from project root for Docker and local builds
module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "frontend/public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'frontend/public'),
        },
        port: 8080,
        open: true,
        historyApiFallback: true,
    }
}
const path = require("path");

// Set entry and output to work from project root for Docker and local builds
module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve(__dirname, "frontend/public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'frontend/public'),
        },
        port: 8080,
        open: true,
        historyApiFallback: true,
    }
}