const path = require('path');

module.exports = {
  entry: {
    'react-input-trigger': path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
