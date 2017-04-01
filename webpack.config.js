import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import { phenomicLoader } from "phenomic";

export default (config = {}) => {

  // hot loading for postcss config
  const postcssPluginFile = require.resolve("./postcss.config.js");
  const postcssPlugins = (webpackInstance) => {
    webpackInstance.addDependency(postcssPluginFile);
    delete require.cache[postcssPluginFile];
    return require(postcssPluginFile)(config);
  };

  return {
    ...(config.dev && {
      devtool: "#cheap-module-eval-source-map"
    }),

    module: {
      noParse: /\.min\.js/,
      rules: [
        // *.md => consumed via phenomic special webpack loader
        // allow to generate collection and rss feed.
        {
          // phenomic requirement
          test: /\.(md|markdown)$/,
          include: path.resolve(__dirname, config.source),
          use: [
            {
              loader: phenomicLoader,
              options: {
                context: path.join(__dirname, config.source)
              }
            }
          ]
        },

        // *.md inside `content/collections` folder
        // allow retrieving and parsing collections of markdown files on the client-side.
        {
          test: /\.(md|markdown)$/,
          include: path.resolve(__dirname, "collections"),
          use: [
            "json-loader",
            {
              loader: "markdown-it-front-matter-loader",
              options: {
                "markdown-it": {
                  html: true,
                  typographer: true
                }
              }
            }
          ]
        },

        // *.js => babel + eslint
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, "collections"),
            path.resolve(__dirname, "scripts"),
            path.resolve(__dirname, "src")
          ],
          use: [
            "babel-loader?cacheDirectory",
            `eslint-loader${config.dev ? "?emitWarning" : ""}`
          ]
        },

        // *.css => CSS Modules
        {
          test: /\.css$/,
          exclude: /\.global\.css$/,
          include: path.resolve(__dirname, "src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: (
                    config.production
                    ? "[hash:base64:5]"
                    : "[path][name]--[local]--[hash:base64:5]"
                  )
                }
              },
              {
                loader: "postcss-loader"
                // options for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // options: { plugins: postcssPlugins }
              }
            ]
          })
        },

        // *.global.css => global (normal) css
        {
          test: /\.global\.css$/,
          include: path.resolve(__dirname, "src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader"
                // options for postcss can't be used right now
                // https://github.com/postcss/postcss-loader/issues/99
                // meanwhile, see webpack.LoaderOptionsPlugin in plugins list
                // options: { plugins: postcssPlugins }
              }
            ]
          })
        },

        // copy assets and return generated path in js
        {
          test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[hash].[ext]",
                context: path.join(__dirname, config.source)
              }
            }
          ]
        },

        // svg as raw string to be inlined
        {
          test: /\.svg$/,
          use: "raw-loader"
        }
      ],
    },

    plugins: [
      // You should be able to remove the block below when the following
      // issue has been correctly handled (and postcss-loader supports
      // "plugins" option directly in options, see postcss-loader usage above)
      // https://github.com/postcss/postcss-loader/issues/99
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: postcssPlugins,
          // required to avoid issue css-loader?modules
          // this is normally the default value, but when we use
          // LoaderOptionsPlugin, we must specify it again, otherwise,
          // context is missing (and css modules names can be broken)!
          context: __dirname
        }
      }),

      new ExtractTextPlugin({
        filename: "[name].[hash].css",
        disable: config.dev
      }),

      ...(config.production && [
        new webpack.optimize.UglifyJsPlugin(
          { compress: { warnings: false } }
        )
      ])
    ],

    output: {
      path: path.join(__dirname, config.destination),
      publicPath: config.baseUrl.pathname,
      filename: "[name].[hash].js"
    },

    resolve: { extensions: [ ".js", ".json" ] }
  };
};
