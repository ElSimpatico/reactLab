import merge from 'webpack-merge';
import { HotModuleReplacementPlugin } from 'webpack';

import webpackConfig from './webpack.config';

export default merge(webpackConfig, {
    mode: 'development',
    plugins: [new HotModuleReplacementPlugin()],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true
    }
});
