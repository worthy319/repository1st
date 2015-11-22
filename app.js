var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// --> 定义静态资源文件请求的映射路径
app.use("/resource", express.static(__dirname + "/resource"));
app.use("/public", express.static(__dirname + "/public"));
app.use("/third-part", express.static(__dirname + "/third-part"));

<<<<<<< HEAD
<<<<<<< HEAD
app.set('view engine', 'html');
app.set("views", __dirname + "/views");
app.engine("html", require('ejs').renderFile);
=======
app.set("views", __dirname + "/views");

app.engine("html", require("ejs").renderFile);
>>>>>>> origin/master
=======
app.set("views", __dirname + "/views");

app.engine("html", require("ejs").renderFile);
>>>>>>> origin/master

app.use(bodyParser.urlencoded({ extended: false }));


// // 开发模式
// if ('development' == app.get('env')) {
// app.use(express.errorHandler());
// }

app.get("/", function(req, res){
	res.render("home");
});

app.post("/signin", function(req, res){
	// 登陆事件，必须要用同步的方式，先获取用户信息才能做其他操作,获取和其他的事件区分开来
	require("./router/userAction.js").signin(req, res);

});

app.post("/signup", function(req, res){
	require("./router/userAction.js").signup(req, res);
});

// app.get("/paper:id", function(req, res){
// 	require("./router/blogActions.js").getPaper(req, res);
// });

app.get("/papers", function(req, res){
	res.render("paper");
});

app.get("/newPaper", function(req, res){
	res.render("blog.html");
});

app.listen(3000);