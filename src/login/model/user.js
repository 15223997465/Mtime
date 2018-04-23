var mongoose =require("mongoose");

var Schema = mongoose.Schema;

var obj = {
	username:String,
	password:String
}

var model = mongoose.model("user",new Schema(obj));
//users 集合 对应model 

module.exports = model;