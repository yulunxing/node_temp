/**
 * Created by Administrator on 2017/4/18.
 */
var tempModel = require("../models/temp");

module.exports = {
   /* get_tempget : function(req, res){
        var connection = mysql.createConnection(config.mysql);

        //定义查询语句 WHERE name='" + req.request.username + "'"
        connection.connect();

        var sql = "SELECT * FROM test_user";
        connection.query(sql, function (err, result){
            if(err){
                console.log('[UPDATE ERROR] - ',err.message);
                return;
            }

            result = JSON.stringify(result);
            console.log(result);
        });
    },*/
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

        res.end("这是index,首页\n");
    },
    get_login : function(req, res) {
        //
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
