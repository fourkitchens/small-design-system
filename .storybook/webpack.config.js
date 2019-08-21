const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.twig$/,
    loader: "twig-loader"
  });

  return config;
};
