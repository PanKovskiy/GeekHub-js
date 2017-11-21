var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

server.use(express.static('public'));
server.post('/validation', jsonParser, require('./controlers/validForm'));

server.listen(8030);
