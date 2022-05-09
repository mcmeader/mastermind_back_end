var express = require('Express');
var app = express();

var activeGames = require('./routers/active-games.js');
var gameData = require('./routers/game-data.js');
var highScore = require('./routers/high-score.js');
var user = require('./routers/user.js');

app.use('/active-games', activeGames);
app.use('/game-data', gameData);
app.use('/high-score', highScore);
app.use('/user', user);

app.listen(3000);