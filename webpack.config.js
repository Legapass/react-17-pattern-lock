const path = require("path");

module.exports = {
	entry     : "./src/index.js",
	externals : {
		react : {
			commonjs  : "react",
			commonjs2 : "react",
			amd       : "react",
			root      : "React"
		}
	},
	module : {
		rules : [
			{
				test    : /\.jsx?$/,
				exclude : /node_modules/,
				use     : "babel-loader"
			}, {
				test    : /\.styl$/,
				exclude : /node_modules/,
				use     : ["style-loader", "css-loader", "stylus-loader"]
			}
		]
	},
	output : {
		path          : path.join(__dirname, "dist"),
		filename      : "index.js",
		library       : "PatternLock",
		libraryTarget : "umd"
	}
};