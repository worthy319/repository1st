
// 建立和数据库的连接
var mongoose = require('./mongoose_single');
var Schema = mongoose.Schema;

// schema 对应着 mongo里面的collection，也定义了这个collection的结构
var usersSchema = new Schema({
	username: String,
	password: String,
	nickname: String,
	email: String,
	telno: String,
	sex: Number,
	birthdate: Date
});

// 对外接口
module.exports = usersSchema;
