module.exports = config:
	files:
		javascripts: joinTo: 'main.js'
		stylesheets: joinTo: 'main.css'
	plugins:
		postcss:
			processors: [
				require('postcss-import')({ path: 'app/css' }),
				require('postcss-nested'),
				require('postcss-custom-properties'),
				require('autoprefixer')(['> 2% in AU'])
			]