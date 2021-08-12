import app from './app';
import http from 'http';

const PORT = process.env.PORT || 8080
const HOST:any = process.env.HOST || '127.0.0.1';

const server = http.createServer(app);

server.listen(PORT, HOST);


