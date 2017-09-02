module.exports = {
    entry: {
        "dagre-d3" : ["./index.js"],
    },
    target: "node",
    output: {
        path: "./dist",
        filename: "build.js",
        libraryTarget: "umd"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: "babel",
            exclude: /node_modules/
        }]
    }
}