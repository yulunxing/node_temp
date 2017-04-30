/**
 * Created by Administrator on 2017/4/25.
 */
var mysql = require('mysql');
var config = require('../config/config');

//使用连接池
var pool = mysql.createPool(config.mysql);

module.exports = {
    selectDb : function(req, res, callback) {
        pool.getConnection(function (err, connection){
            //定义查询语句 WHERE name='" + req.request.username + "'"
            console.log(JSON.stringify(req.request));
            var sql = "SELECT * FROM user WHERE name='hank'";
            connection.query(sql, function(err, result){
                result = JSON.stringify(result);
                console.log(result);
                callback(err, result);

                connection.release();
            });
        })
    }
};
