import { Server, Socket } from 'socket.io';
export default (server: any) => {
    const io = new Server(server);
    io.on('connection', (socket: Socket) => {
        console.log(socket.id);
    })
}