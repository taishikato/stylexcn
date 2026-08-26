const path = require("node:path");
const babelConfig = require("./babel.config");

const docsDir = __dirname;
const kitSrc = path.resolve(docsDir, "../../src");

module.exports = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        path.join(docsDir, "app/**/*.{js,jsx,ts,tsx}"),
        path.join(docsDir, "src/**/*.{js,jsx,ts,tsx}"),
        path.join(kitSrc, "**/*.{js,jsx,ts,tsx}"),
      ],
      babelConfig: {
        babelrc: false,
        parserOpts: { plugins: ["typescript", "jsx"] },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};
