const socket = io()

const send = document.querySelector('#send-message');
const allMessages = document.querySelector('#all-messages');

send.addEventListener('click', () => {
    const message = document.querySelector('#message');
    socket.emit('message' , message.value);
    message.value = '';
})

socket.on('message', ({user, message}) => {

    const msg = document.createRange().createContextualFragment(`
         <div class='message'>
         <div class='image-container'>
                    <img
                        src='https://r1.community.samsung.com/t5/image/serverpage/image-id/2522501i36D43428EAF4472E/image-size/large?v=v2&px=999'
                        alt='michi'>
                </div>
                <div class='message-body'>
                        <div class='user-info'>
                            <span class='username'>${user}</span>
                            <span class='time'>Hace 1 segundo</span>
                        </div>

                        <p>
                            ${message}
                        </p>
                </div>
         </div>
    `)
    console.log(message);
    allMessages.append(msg);
})