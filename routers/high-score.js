var express = require('express');
var router = express.Router();

router.get('/high-score', function(req, res){
   res.send('GET high score');
});

router.post('/high-score', function(req, res){
   res.send('POST user high score');
});

router.post('/high-score/{id}', function(req, res){
    res.send('POST user high score', req);
 });

module.exports = router;