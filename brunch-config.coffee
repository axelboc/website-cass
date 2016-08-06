module.exports = config:
  files:
    stylesheets: joinTo: 'main.css'
  plugins:
    postcss:
      processors: [
        require('postcss-import')({ path: 'app/css' }),
        require('postcss-nested'),
        require('postcss-custom-properties'),
        require('cssnano')({ autoprefixer: ['> 2% in AU'] })
      ]
    static:
      processors: [
        require('html-brunch-static')({
          handlebars:
            enableProcessor:
              fileMatch: /\.hbs$/
              fileTransform: ((f) -> f.replace(/\.hbs$/, '.html'))
        })
      ]
