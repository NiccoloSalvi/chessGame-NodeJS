var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app); // http
var io = require('socket.io')(http); // socket.io
var port = process.env.PORT || 3000; // porta del progetto

var lobbyUsers = {};
var users = {}; // utenti
var activeGames = {}; // games attivi

io.on('connection', function(socket) {
    console.log('new connection');

    socket.on('move', function(msg) {
        console.log('Got new Move from client: ' + msg);
        socket.broadcast.emit('moveResp', msg); // invio mex a tutti i client connessi
    });

    socket.on('login', function(userId) {
        console.log("new login");
        doLogin(socket, userId); // nuovo utente loggato
    });

    socket.on('invite', function(opponentId) {
        console.log('got an invite from: ' + socket.userId + ' --> ' + opponentId);
        
        // invio del mex a tutti i client
        socket.broadcast.emit('leavelobby', socket.userId); 
        socket.broadcast.emit('leavelobby', opponentId);

        var game = {
            id: Math.floor((Math.random() * 100) + 1), // id casuale del game
            users: {white: socket.userId, black: opponentId} // colore pezzi dei giocatori
        };
        
        socket.gameId = game.id;
        activeGames[game.id] = game;
        
        users[game.users.white].games[game.id] = game.id;
        users[game.users.black].games[game.id] = game.id;
  
        console.log('starting game: ' + game.id);
        lobbyUsers[game.users.white].emit('joingame', { game: game, color: false });
        lobbyUsers[game.users.black].emit('joingame', { game: game, color: true });
        
        delete lobbyUsers[game.users.white];
        delete lobbyUsers[game.users.black];
    });

    function doLogin(socket, userId) {
        socket.userId = userId;

        if (!users[userId]) {
            console.log('creating new user');
            users[userId] = {
                userId: socket.userId,
                games: {}
            };
        } else {
            console.log('user found!');
            Object.keys(users[userId].games).forEach(function(gameId) {
                console.log('gameid - ' + gameId);
            });
        }
        
        socket.emit('loginResp', {
            users: Object.keys(lobbyUsers),
            games: Object.keys(users[userId].games)
        });
        lobbyUsers[userId] = socket;
        
        socket.broadcast.emit('joinlobby', socket.userId);
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function() {
    console.log('Listening on *: ' + port);
});