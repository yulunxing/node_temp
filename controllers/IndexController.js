/**
 * Created by Administrator on 2017/4/18.
 */
module.exports = {
    get_index : function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.end("这是get请求方式\n");
    },
    post_index : function(req, res) {
        res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        res.end("这是post请求方式\n");
    }
};
