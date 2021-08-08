import { MiniReactRefreshWebpackPlugin } from '@njzy/mini-react-refresh-webpack-plugin';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.base';

const config = merge(baseConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    clientLogLevel: 'silent',
    publicPath: '/',
    historyApiFallback: true,
    progress: true,
    overlay: true
  },
  module: {
    // rules: [
    //   {
    //     test: /\.(jsx|tsx)$/,
    //     exclude: /(node_modules)/,
    //     use: [
    //       {
    //         loader: 'babel-loader',
    //         options: {
    //           cacheDirectory: true,
    //           plugins: [require.resolve('react-refresh/babel')].filter(Boolean)
    //         }
    //       }
    //     ]
    //   }
    // ]
  },
  plugins: [new MiniReactRefreshWebpackPlugin({ entryNames: ['popup', 'options'], exclude: [/\/src\/contents\//] })]
});

export default config;
