// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader','sass-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
        use: { loader: 'file-loader'}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			},
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
					presets: ['env', 'react', 'es2015'],
					plugins: ['transform-class-properties']
				}
			}


		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),

	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
}
