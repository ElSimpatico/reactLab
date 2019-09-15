import { resolve, join } from 'path';
import { Configuration } from 'webpack';

// Plugins
import { htmlWebpack } from './plugins/html-webpack';
import { cleanWebpack } from './plugins/clean-webpack';

const rootDir = resolve(__dirname, '../src');

const webpackCommon: Configuration = {
    context: rootDir,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': join(rootDir, 'components'),
            '@core': join(rootDir, 'core'),
            '@mocks': join(rootDir, 'mocks'),
            '@pages': join(rootDir, 'pages'),
            '@shared': join(rootDir, 'shared'),
            '@services': join(rootDir, 'services')
        }
    },
    entry: {
        reactLab: join(rootDir, 'index.tsx')
    },
    output: {
        path: resolve(rootDir, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [cleanWebpack, htmlWebpack]
};

export default webpackCommon;
