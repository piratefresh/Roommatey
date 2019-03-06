const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
module.exports = withCSS(
  withImages({
    webpack: config => {
      // Alias all `react-native` imports to `react-native-web`
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web"
      };

      return config;
    }
  })
);
