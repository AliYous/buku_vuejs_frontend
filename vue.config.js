const GoogleFontsPlugin = require("google-fonts-webpack-plugin");


module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Roboto" }
                ]
            })
        ]
     }
}