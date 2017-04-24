/**
 * Created by Administrator on 2017/4/18.
 */
module.exports = function (app) {
    app.use(function(request, response, next){
        if(request.url == "/") {
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            response.end("这是中文\n");
        } else {
            next();
        }
    });
    app.use(function(request, response, next){
        if(request.url == "/about") {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Weclome to the aboutPage!!");
        } else {
            next();
        }
    });
    app.use(function(request, response){
        response.writeHead(404,{ "Content-Type": "text/plain"});
        response.end("404 error!");
    });
};
