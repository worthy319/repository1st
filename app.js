var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-Parser");

// --> 定义静态资源文件请求的映射路径
app.use("/resource", express.static())







app.listen(3000);