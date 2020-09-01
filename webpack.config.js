var path = require('path');

module.exports = {
    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    entry: {
        main: './src/index.tsx',
    },

    devServer: {
        compress: true,
        port: 3000
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    "style-loader", // Load css from JS style String.
                    "css-loader", // Translate css into common JS.
                    "sass-loader", // Convert SCSS to css.
                    "postcss-loader"
                ]
            },
            {
                test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};