/**
 * Created by Administrator on 2017/4/18.
 */
var express = require('express');
var app = express();
var expressControllers = require('express-controller');
var router = express.Router();

var bodyParser = require('body-parser');

app.use(router);
//对所有app的请求都进行拦截和解析
app.use(bodyParser.json());

//绑定控制器
expressControllers.setDirectory(__dirname + '/controllers').bind(router);




var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例, 运行地址为:http://%s:%s", host, port);
});
