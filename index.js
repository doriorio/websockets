//server side code!!
var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(8080, function(){
    console.log('listening to req on port 8080')
});

//Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('connected to socket', socket.id);
    console.log('connection fn firing - server side');

    socket.on('chat', function(data){
        console.log('on chat, server side');
        io.sockets.emit('chat', data);
    });
    socket.on('typing',function(data){
        console.log('on typing, server side');

        socket.broadcast.emit('typing', data)
    });
});

