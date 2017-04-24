/**
 * Created by Administrator on 2017/4/18.
 */
module.exports = function (app){
    app.get('/temp1', function(req, res){
        res.send(__dirname);
    });
};
