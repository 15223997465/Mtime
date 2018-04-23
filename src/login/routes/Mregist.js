var express=require('express');
var router=express.Router();
var UserModel=require('../model/user')

router.get('/',function(req,res,next){
	res.render('regist');
});

router.post("/",function(req,res){
	//获取前端post请求？ req.body 
	//获取前端get 请求？ req.query

	console.log(req.body);
	console.log("55555555555555555555");
	//存数据库- 

	UserModel.create({
		username:req.body.username,
		password:req.body.pwd
	},function(err,data){
		if(!err){
			console.log(data);
			res.send("OK");
			//res.redirect("/login"); //重定向
		}
	})

})
module.exports=router;


