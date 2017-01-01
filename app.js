/**
 * Module dependencies.
 */
//---------------------
require('./lib/db');
//--------------------
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080); // listening 8080 port
//設定存放模板的目錄位置
app.set('views', path.join(__dirname, 'views'));
//設定所要選用的模板引擎，副檔名為.jade，可使用res.render()引用它
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//-----------------------------------------------
app.configure(function() {
    app.use(express.cookieParser());

    app.use(express.cookieSession({
        key: 'node',
        secret: 'HelloExpressSESSION'
    }));
    //啟用body解析器
    app.use(express.bodyParser());
});
//------------------------------------------------
app.use(app.router); //啟用路由機制
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
//------------------------------------------------
app.get('/mydir/hello', function(req, res) { //QueryString 練習
    console.log(req.query.name);
    console.log(req.query.country);
});

app.post('/mydir/hello', function(req, res) { //POST方法
    console.log(req.body.name);
    console.log(req.body.country);
});

app.get('/mydir/hello/:name', function(req, res) { //使用路由參數的方式來得到資料，直接將網址路徑本身變成傳遞參數的容器
    res.send("name: " + req.params.name); //exp: 傳遞一個名字[QQ]，/mydir/hello/QQ
    console.log(req.params.name);
    res.end();
});


app.get('/', routes.index);
app.get('/register', user.register);
app.get('/signin', user.signin);
app.get('/signout', user.signout);
app.get('/forget', user.forget);
app.get('/add_article', user.add_article);
app.get('/profile', user.profile);
app.get('/modify/:id', user.modify);
app.get('/message/:id', user.message);
app.post('/apis/login', user.login);
app.post('/apis/add', user.add);
app.get('/apis/delete/:id', user.del_article);
app.post('/apis/update/:id', user.update);
app.post('/apis/comment/:id', user.comment);
//---------------------------------------------------
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});