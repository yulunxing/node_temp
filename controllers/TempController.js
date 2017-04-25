/**
 * Created by Administrator on 2017/4/18.
 */
var tempModel = require("../models/temp");
module.exports = {
    get_tempget : function(req, res){
        var arr;
        tempModel.selectDb(req, res, function(err, result){
            res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            res.write(result);
            console.log(result);
            res.end();
        });
    },
    get_index : function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        console.log("method=" + req.method);
        console.log("baseUrl=" + req.baseUrl);
        console.log("path=" + req.path);
        console.log("user-agent=" + req.headers['user-agent']);
        //获取请求头
        console.log(req.get('user-agent'));
        console.log("req=" + req.query.name);
        console.log("res=" + res);
        res.end("这是get请求方式\n");
    },
    get_finest : function(req, res) {
        res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
        res.write("这是finest请求页面\n");
        res.write("这是被多次执行的write\n");
        res.end();
    },
    get_sendid : function(req, res, id) {
        res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
        res.write("这是送过来的参数值:id=" + id);
        res.end();
    }
};
