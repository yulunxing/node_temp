/**
 * Created by Administrator on 2017/4/18.
 */
var express = require('express');
var app = express();
var expressControllers = require('express-controller');
var path = require('path');
//是nodejs的一个日志模块
var logger = require('morgan');
//html模板
var ejs = require('ejs');
//是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
var bodyParser = require('body-parser');
//express路由
var router = express.Router();

//视图路径
app.set('views', path.join(__dirname, 'views'));

//设置html引擎
app.engine('.html', ejs.__express);
//设置视图引擎 set()方法的参数中，有一项是'view engine'，表示没有指定文件模板格式时，默认使用的引擎插件(Express默认使用jade模板)
app.set('view engine', 'html');

//路由
app.use(router);

/*
对所有app的请求都进行拦截和解析,可以设置为只有请求该路由时，中间件才会拦截和解析该请求
例:app.post('/login', jsonParser, function (req, res)
*/
var jsonParser = bodyParser.json();
app.use(jsonParser);
/*
extended为false表示使用querystring来解析数据，这是URL-encoded解析器
创建 application/x-www-form-urlencoded 解析
 form的enctype属性为编码方式，常用有两种：application/x-www-form-urlencoded和multipart/form-data，默认为application/x-www-form-urlencoded。
 当action为get时候，浏览器用x-www-form-urlencoded的编码方式把form数据转换成一个字串（name1=value1&name2=value2...），
 然后把这个字串append到url后面，用?分割，加载这个新的url。 当action为post时候，浏览器把form数据封装到http body中，然后发送到server。
 如果没有type=file的控件，用默认的application/x-www-form-urlencoded就可以了。
 但是如果有type=file的话，就要用到multipart/form-data了。浏览器会把整个表单以控件为单位分割，
 并为每个部分加上Content-Disposition(form-data或者file),Content-Type(默认为text/plain),name(控件name)等信息，
 并加上分割符(boundary)。
*/
app.use(bodyParser.urlencoded({extended: false}));

//启动日志格式为:
app.use(logger('dev'));

//绑定控制器
expressControllers.setDirectory(__dirname + '/controllers').bind(router);

//启动
var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例, 运行地址为:http://%s:%s", host, port);
});
