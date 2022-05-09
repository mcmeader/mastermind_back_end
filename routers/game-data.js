var express = require('express');
var router = express.Router();

router.get('/game/{id}', function(req, res){
   res.send('GET game',req);
});

router.post('/game/{id}/guesser', function(req, res){
   res.send('POST game guesser ',req);
});

router.post('/game/{id}/master', function(req, res){
    res.send('POST game master ',req);
 });

module.exports = router;