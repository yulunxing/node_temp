/**
 * Created by Administrator on 2017/4/18.
 */
module.exports = {
    get_index : function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
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
