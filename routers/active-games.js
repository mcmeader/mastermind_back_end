var express = require('express');
var router = express.Router();

router.get('/active-games', function(req, res){
   res.send('GET user');
});

router.post('/active-games', function(req, res){
   res.send('POST user');
});

module.exports = router;