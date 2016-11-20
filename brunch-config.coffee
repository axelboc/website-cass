path = require 'path'

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
      pathTransform: (f) -> path.relative 'pages', f
      processors: [
        require('html-brunch-static')({
          defaultContext:
            navItems: [
              { page: 'index', path: '/', label: 'About' }
              { page: 'work', path: '/work', label: 'Work' }
              { page: 'nyctophilia', path: '/nyctophilia', label: 'Nyctophilia' }
            ]
          handlebars:
            enableProcessor:
              fileMatch: /\.hbs$/
              fileTransform: ((f) -> f.replace(/\.hbs$/, '.html'))
            helpers:
              currentNavItem: (current, page) ->
                if current == page then ' Nav_item--current' else ''
              debug: (val) ->
                console.log("==== CONTEXT ====")
                console.log(this)
                if (val)
                  console.log("===== VALUE =====")
                  console.log(val)
        })
      ]
