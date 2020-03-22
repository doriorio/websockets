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

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });
});
