//client side code!!
//Make Connection
var socket = io.connect('http://localhost:8080');

// Cached Query DOM
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var message = document.getElementById('message');
var output = document.getElementById('output');
var randomButton = document.getElementById('thisButton');

//Emit events
btn.addEventListener('click', function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    })
    message.value = '';

})

message.addEventListener('keypress', function(){
    console.log('keypress fn firing - client side');

    socket.emit('typing', handle.value);
});

//Listen for events
socket.on('chat', function(data){
    console.log('onchat function firing - client side');
    output.innerHTML += 
    `<p><strong> ${data.handle} </strong> ${data.message} </p>`;
    feedback.innerHTML = '';

})

socket.on('typing', function(data){
    console.log('on typing function firing - client side');

    feedback.innerHTML = 
    `<p><em> ${data} is typing a message.. </em></p>`;
})

randomButton.addEventListener('click', function(){
    var img = document.querySelector('h2');
    console.log('in get random')
    fetch('https://ranmoji.herokuapp.com/emojis/api/v.1.0/')
    .then(response => {
        response.json().then(data =>{
            console.log('response data', data.emoji)
            img.innerHTML = (data.emoji)
        })
    });
});