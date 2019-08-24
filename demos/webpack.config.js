const path                       = require("path");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = {
    entry   : path.resolve(__dirname, "src", "app.tsx"),
    devtool : "sourcemap",
    resolve : {
        extensions : [".ts", ".tsx", ".js", ".json"],
        alias      : {
            "react-dom" : "@hot-loader/react-dom"
        }
    },
    module  : {
		rules : [
			{
                test    : /\.tsx?$/,
                exclude : /node_modules/,
                use     : [{
                    loader  : "ts-loader",
                    options : {
                        context                 : path.resolve(__dirname, ".."),
                        onlyCompileBundledFiles : true,
                        configFile              : path.resolve(__dirname, "tsconfig.json")
                    }
                }]
            },
            {
				test    : /\.styl$/,
				exclude : /node_modules/,
				use     : ["style-loader", "css-loader", "stylus-loader"]
			}
		]
	},
	output : {
        path       : path.resolve(__dirname, "public"),
        publicPath : "/",
        filename   : "bundle.min.js"
    },
    devServer: {
        publicPath         : "/",
        contentBase        : path.resolve(__dirname, "public"),
        port               : 8080,
        overlay            : true
    },
    plugins : [
        new WebpackBuildNotifierPlugin({
          title       : "Build succeeded!",
          successIcon : path.resolve(__dirname, "react.png")
        })
    ]
};