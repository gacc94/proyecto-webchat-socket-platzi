//* Importaciones
import express from 'express';
import { createServer } from 'http';
import * as path from 'path';
import serverSocket from './server-socket';
import router from './routes';

// const cookieParser = require('cookie-parser');
//* ========== Declaraciones ===========*/
const app = express();
const server = createServer(app);

//* ========== Settings ============== */
app.set('port', process.env.PORT || 3003);
app.set('views', path.join(`${__dirname} views`));

//* ========== Routes ============*/
app.use(router);
// app.use(cookieParser);

//* Public
app.use(express.static(path.join(`${__dirname}/public`)));
app.use(express.static(path.join(`${__dirname}/views`)));

//* ========== Llamar al servidor Socket ============*/
serverSocket(server);

//* ========== Levantar Servidor ================*/
server.listen(app.get('port'), () => {
    console.log(`Server running in port ${app.get('port')}`);
});

console.log('Server');