var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
var port = process.env.PORT || 3000;

app.get('/app', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('sendMessage', (msg) => {
    io.emit('receiveMessage', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});


