const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {


    return {
        entry: {
            app: path.join(__dirname, "src", "index.tsx"),
        },
        target: "web",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|j?g|svg|gif)?$/,
                    use: "file-loader",
                },
                {
                    test: /\.(ogg|mp3|wav|mpe?g)$/i,
                    use: "file-loader",
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist"),
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "public", "index.html"),
                filename: "./index.html"
            }),
            new CleanWebpackPlugin(),
        ],
    };
};
