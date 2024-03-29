import path from 'path';

module.exports = {
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      contents: path.resolve(__dirname, 'src/contents/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
    }
  },
//   module: {
//     loaders: [
//         {
//             // test: /\.jsx?$/,
//             exclude: /node_modules/,
//             loaders: ['babel'],
//             //loaders: ["react-hot", 'babel-loader'],
//             //query: {
//             //    presets : ['es2015', 'react']
//             //}
//         }
//     ]
// }
};