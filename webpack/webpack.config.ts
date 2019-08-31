import { Configuration } from 'webpack';
import WebpackDev from './webpack.dev';
import WebpackPro from './webpack.prod';

import { ENVIRONMENT } from '../environments/utils/environment';

/**
 *
 * @param env environment to run app
 */
function webpackSelector(env: ENVIRONMENT): Configuration {
    switch (env) {
        case ENVIRONMENT.DEV:
            return WebpackDev;
        case ENVIRONMENT.PRO:
            return WebpackPro;
        default:
            throw new Error(
                `${env} is not a recognized environment. webpack --config webpack/webpack.config.ts --env dev | pro`
            );
    }
}

export default webpackSelector;
