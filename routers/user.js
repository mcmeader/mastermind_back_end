var express = require('express');
var router = express.Router();

router.get('/user', function(req, res){
   res.send('GET user');
});

router.post('/', function(req, res){
   res.send('POST user');
});

module.exports = router;