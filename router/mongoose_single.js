var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:32000/blogs");

module.exports = mongoose;