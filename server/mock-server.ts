import JsonServer from 'json-server';
import { resolve } from 'path';
import { config } from 'dotenv';

const dbDir = resolve(__dirname, '../mocks/data.json');
const environmentVariables = config({
    path: resolve(__dirname, '../environments/.env.dev')
}).parsed as any;

const server = JsonServer.create();
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
