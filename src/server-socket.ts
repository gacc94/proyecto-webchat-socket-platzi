import { Server, Socket } from 'socket.io';

export default (server: any): void => {
    const io = new Server(server);
    io.on('connection', (socket: Socket) => {
        socket.on('message', (message: string) => {
            console.log(message);
            io.emit('message', {
                user: 'Retaxito',
                message
            });
        });
        console.log(socket.id);
    });
};