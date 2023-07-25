//* Importaciones
import express, { Request, Response } from 'express';
import { Server, Socket } from 'socket.io';
import { createServer } from 'http';
import * as path from 'path';
import serverSocket from './server-socket';
import router from './routes';

//* Declaraciones
const app = express();
const server = createServer(app);

//* Settings
app.set('port', process.env.PORT || 3002);
app.set('views', path.join(`${__dirname} views`));

//* Routes
app.use(router);

//* Public
app.use(express.static( path.join(`${__dirname} public`)))
app.use(express.static(path.join(__dirname, 'views')));

//* Llamar al servidor Socket
serverSocket(server);

//* Levantar Servidor
server.listen(app.get('port'), () => {
    console.log(`Server running in port ${app.get('port')}`);
})

console.log('Server');