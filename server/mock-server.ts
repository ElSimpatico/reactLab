/**Third-party imports */
import JsonServer from 'json-server';

/**Local imports */
import { resolve } from 'path';
import {
    getDotEnvironment,
    ENVIRONMENT
} from '../environments/utils/environment';
import { routesRewrite } from './routes-rewriter';

const dbDir = resolve(__dirname, '../mocks/data.json');
const environmentVariables = getDotEnvironment(ENVIRONMENT.DEV) as any;

const server = JsonServer.create();
const serverRewriter: any = Object.keys(routesRewrite).reduce(
    (prev: any, current: string) => {
        const key = `${environmentVariables.API_BASE}${current}`;
        const value = `${environmentVariables.API_BASE}${routesRewrite[current]}`;
        prev[key] = value;
        return prev;
    },
    {}
);

server.use(JsonServer.rewriter(serverRewriter));
server.use(function(req, res, next) {
    setTimeout(next, 500);
});
const router = JsonServer.router(dbDir);
const middlewares = JsonServer.defaults();

server.use(middlewares);
server.use('/api/rest', router);
server.listen(environmentVariables.PORT_PROXY, () => {
    console.log(
        'Json server is running in port',
        environmentVariables.PORT_PROXY
    );
});
