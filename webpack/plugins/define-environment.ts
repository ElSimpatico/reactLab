import { DotenvParseOutput } from 'dotenv';
import { DefinePlugin } from 'webpack';
import {
    ENVIRONMENT,
    getDotEnvironment
} from '../../environments/utils/environment';

export function defineEnvironmentPlugin(env: ENVIRONMENT): DefinePlugin {
    const dotEnvironment: DotenvParseOutput = getDotEnvironment(env);
    const jsonVariables = Object.keys(dotEnvironment).reduce(
        (prev: any, current: string) => {
            prev[current] = JSON.stringify(dotEnvironment[current]);
            return prev;
        },
        {}
    );
    return new DefinePlugin({
        process: {
            env: { ...jsonVariables }
        }
    });
}
