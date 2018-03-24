var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;
var session = require('express-session');

app.use(express.static(path.join(__dirname + '/client/dist')));
app.use(session({secret: "secret_key", saveUninitialized: true}));
app.use(bp.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.listen(port, function(req, res){
    console.log('listening');
})