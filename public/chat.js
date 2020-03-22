//Make Connection
var socket = io.connect('http://localhost:8080');

// Cached Query DOM
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var message = document.getElementById('message');
var output = document.getElementById('output');

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
})

//Listen for events
socket.on('chat', function(data){
    output.innerHTML += 
    `<p><strong> ${data.handle} </strong> ${data.message} </p>`
})