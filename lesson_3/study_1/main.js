var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended: true}))

server.post('/createUser', require('./controllers/createUser'));
server.post('/createOther', require('./controllers/createOther'));

server.listen(8010);
