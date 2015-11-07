var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-Parser");
var assert = require("assert");

// --> 定义静态资源文件请求的映射路径
app.use("/resource", express.static(__dirname + "/resource"));
app.use("/public", express.static(__dirname + "/public"));

app.set("views", __dirname + "/views");

app.engine("html", require("ejs").renderFile);




app.get("/", function(req, res){
	app.render("index.html");
});






app.listen(3000);