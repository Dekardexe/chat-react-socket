import io from 'socket.io-client';

const socket = io.connect("https://tryagainbackend.onrender.com");

export default socket;