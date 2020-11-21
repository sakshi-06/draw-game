var express = require('express');

var app = express();
var socket = require('socket.io');
var server = app.listen(3000);

var io= socket(server);
io.sockets.on('connection',(socket)=>{
   console.log('new connection: '+socket.id)

   socket.on('mouse', mouseMsg);
   function mouseMsg(data){
      //when a message comes in to send it back out
      socket.broadcast.emit('mouse', data);
      console.log(data);
   }
});


app.use(express.static('public'));

console.log("My socket server is running");
