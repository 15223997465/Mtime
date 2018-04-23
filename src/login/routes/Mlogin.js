var express=require('express');
var router=express.Router();
var UserModel=require('../model/user')

router.get('/',function(req,res,next){
	res.render('login');
});
router.post("/",function(req,res){
	//获取前端post请求？ req.body 
	//获取前端get 请求？ req.query

	//console.log(req.body);
	console.log("ddddddddddddddddddddddddd");
	//存数据库- 
	
	UserModel.find({
		username:req.body.username,
		password:req.body.pwd
	},function(err,data){
		if(!err){
			console.log(data);
			if(data.length==0){
				res.send("1");
			}else{
				//req.session.flag =data[0]; //开辟空间存储 信息
				res.send("2");
			}
		}
	})

})
module.exports=router;


