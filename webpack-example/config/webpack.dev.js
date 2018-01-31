const path = require('path');

module.exports = {
	entry: {
		main: ['./src/main.js']		
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].html'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
			}
		]
	}
}