const path = require("node:path");

const dev = process.env.NODE_ENV !== "production";
const docsDir = __dirname;
const kitRoot = path.resolve(docsDir, "../..");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: {
          "@/*": [path.join(docsDir, "*")],
          "@stylexcn/*": [path.join(kitRoot, "src/*")],
        },
        unstable_moduleResolution: {
          type: "commonJS",
          rootDir: kitRoot,
        },
      },
    ],
  ],
};
