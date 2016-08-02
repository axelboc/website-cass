module.exports = {
	files: {
		stylesheets: { joinTo: 'main.css' }
	},
	plugins: {
		postcss: {
			processors: [
				require('postcss-import')({ path: 'app/css' }),
				require('postcss-nested'),
				require('postcss-custom-properties'),
				require('cssnano')({ autoprefixer: ['> 2% in AU'] })
			]
		}
	}
};
