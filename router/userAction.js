
var mongoose = require('./mongoose_single');
// mongoose.connect('mongodb://localhost:32000/blogs');

exports.signup = function(req, res){

	// 
	var userSchema = require("./user.js");
	var user = mongoose.model("users", userSchema);
	var newUser = new user({
		username: "wangx",
		password: "wangx",
		nickname: "ong",
		email: "ndiwlove@gmail.com",
		telno: 13411383670,
	});
	newUser.save(function(err){
		if(err) {
			res.end("sign in failed.");
		}else{
			res.end("sign in successfully");
		}

	});

}

exports.signin = function(req, res){

	// 
	var userSchema = require("./user.js");
	var user = mongoose.model("users", userSchema);

	// 异步调用
	user.find({"username": "wangx"}, function(err, c_user){
		if (err) return handleError(err);	 	
		if(c_user.length == 1){

			// 登陆成功之后需要获取相应信息展示。
			var blogSchema = require("./blog.js");
			var blog = mongoose.model("blogs", blogSchema);
			blog.find({"author": "Reg.Jay"}, function(err, blogs){
				if(err) console.log(err);
				if(blogs.length >= 0){
					// console.log(blogs);
					res.end(JSON.stringify(blogs));
				}
			});
			exports.current_user = c_user;
		} else if(c_user.length > 1){
			res.end("data wrong. please contract with me.");
		}else{
			res.end("sign on failed");
		}
	});

	// 这里就算return一般也会比上面的内部代码执行要靠前 。
}

exports.signout = function(req, res){

}

exports.delete = function(req, res){

}
