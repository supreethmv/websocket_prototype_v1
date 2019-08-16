let app = require('express')();
var server=require('http').Server(app);
var io=require('socket.io')(server);

var min=1,max=100;

io.on('connection',function(socket){
    console.log("A user connected");
    myLoop(socket);
});

server.listen(3000,()=>{
    console.log("Socket.io server is listening on port 3000");
});

//Infinite loop(delay of 1000ms) to emit an event 'test_event' and a random number betweeen [min,max]
function myLoop(socket) {
   setTimeout(function () {
    socket.emit('test_event',Math.floor(Math.random() * (max - min)) + min);
    myLoop(socket);
   }, 1000)
}
