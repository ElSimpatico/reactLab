import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const htmlWebpack = new HtmlWebpackPlugin({
    template: resolve(__dirname, '../', '../src/index.html')
});
