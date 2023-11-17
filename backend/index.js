const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const cors = require('cors');

const route = require('./route');
const io = new Server(server, {
   cors: {
      origin: "*",
      methods: ["GET", "POST"],
   },
});

app.use(cors({ origin: "*" }));
app.use(route);

const users = [];
const messages = [];

io.on('connection', (socket) => {
   let userName;
   let userAvatar;

   console.log(`user connected`);

   socket.on('enter', (user) => {
      userName = user.name;
      userAvatar = user.avatar;
      users.push(user);
      io.emit('userListFromServer', users)
      io.emit(`messageListFromServer`, messages)
   })


   socket.on('sendMessage', (text, date, image) => {
      if (image) {
         const message = {
            text: text,
            image: image,
            name: userName,
            avatar: userAvatar,
            date: date,
         }
         messages.push(message);
         io.emit('sendMessageFromServer', message);
      } else {
         const message = {
            text: text,
            name: userName,
            avatar: userAvatar,
            date: date,
         }
         messages.push(message);
         io.emit('sendMessageFromServer', message);
      }

   })

   socket.on('disconnect', () => {
      console.log('disc = ', userName);
      deleteCurrentUser();
   });

   socket.on('leave', () => {
      if (userName) {
         console.log(`Комнату покинул(а)`, userName)
         deleteCurrentUser();
      }
   })

   function deleteCurrentUser() {
      for (let i = 0; i < users.length; i++) {
         if (users[i].name === userName) {
            users.splice(i, 1);
            break;
         }
      }
      io.emit('userListFromServer', users)
   }
})

server.listen(5000, () => {
   console.log('listening on :5000');
});