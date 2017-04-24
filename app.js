/**
 * Created by Administrator on 2017/4/18.
 */
var express = require('express');
var app = express();
var routes = require('./routes')(app);
var temp = require('./routes/temp')(app);
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例,访问地址:http://%s:%s", host, port);
});
