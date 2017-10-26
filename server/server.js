var express = require('express');
var app = express();
var bodyparser=require('body-parser');
var db = require('./db/api')(app);
var port = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send('nodejs server')
})

app.listen(port,function(req,res){
    console.log('app running on port '+port);
})