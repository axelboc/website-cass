module.exports = (config) => [
  require("stylelint")(),
  require("postcss-cssnext")({
    browsers: "last 2 versions",
    features: {
      customProperties: {
        variables: {
          fontText: "'Roboto', 'Segoe UI', 'Optima', 'Arial', sans-serif",
          fontHeading: "'Georgia', 'Times', 'Times New Roman', serif",
          fontLogo: "'Princess Sofia', 'Garamond', serif",
          colBg: "#f1f1f1",
          colShadow: "#929297",
          colPrimary: "rgb(175, 54, 54)",
          colPrimary80: "rgba(175, 54, 54, 0.8)",
          colPrimary20: "rgba(175, 54, 54, 0.2)",
          colSecondary: "rgb(32, 32, 48)",
          colSecondary80: "rgba(32, 32, 48, 0.8)",
          colSecondary50: "rgba(32, 32, 48, 0.5)",
          colSecondary20: "rgba(32, 32, 48, 0.2)",
          colTernary: "#e2c5bc"
        },
      },
    },
  }),
  require("postcss-reporter")(),
  ...(!config.production ? [
    require("postcss-browser-reporter")(),
  ] : []),
]
