import JsonServer from 'json-server';
import { resolve } from 'path';

const dbDir = resolve(__dirname, '../mocks/data.json');

const server = JsonServer.create();
const router = JsonServer.router(dbDir);
const middlewares = JsonServer.defaults();

server.use(middlewares);
server.use('/api', router);
server.listen(3001, () => {
    console.log('Json server is running');
});
