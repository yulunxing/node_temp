/**
 * Created by Administrator on 2017/4/18.
 */
var express = require('express');
var app = express();
var routes = require('./routes')(app);
var temp = require('./routes/temp')(app);
app.listen(3000);
