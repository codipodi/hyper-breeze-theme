import * as webpack from "webpack"

const config: webpack.Configuration = {
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ["css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    libraryTarget: "commonjs",
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
  target: "node",
}

export default config
