const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/showcase2-demo/" : "/",

  transpileDependencies: ["vuetify"],
  lintOnSave: false,

  configureWebpack: {
    optimization: {
      splitChunks: {
        maxSize: 250000,
      },
    },
  },
});
