const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env','@babel/preset-react']
          }
        }
      },
      {
        test: /\.ts(x?)$/,
        exclude: ['/node_modules/'],
        use: [
            'babel-loader',
            'ts-loader',
        ]
      },
      {
        test: /\.css$/,
        // the order of `use` is important!
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  resolve: {
    extensions: [".tsx",".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, 'public/assets/'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  }
};
