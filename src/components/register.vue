<template>
	<div>
		<ul>
			<li>
				<span>用户名:</span>
				<input type="text" v-model="userName"/>
			</li>
			<li>
				<span>密码:</span>
				<input type="password" v-model="pwd"/>
			</li>
			<li style="border: none;margin-top: 0.3rem;">
				<a class="registbtn" @click="regist">注册</a>
				<p @click="regist">登录</p>
			</li>
			
			
		</ul>
	</div>
</template>

<script>
	import router from "../router";	
	import axios from "axios";
	export default{
		data(){
			return{
				userName:"",
    			pwd:"",
    			data:""
			}
		},
		methods:{
			regist(){
				router.push("/login");
				var username=this.userName;
				var pwd=this.pwd;
				console.log(this.userName);
				console.log(this.pwd);

				axios.post('/Mregist', {
				    username,
				    pwd
				  })
				  .then(function (response) {
				  })
				  .catch(function (error) {
				    console.log(error);
				  });
			}
		}
			}
</script>

<style type="text/css" lang="scss" scoped>
ul{
	margin: 0;
	padding: 0;
}
div{
	font-size: 0.2rem;
	ul{
		padding: 0.24rem 0.2rem;
		color:#777;
		li{
			
			border-bottom: 1px solid #d8d8d8;			
			padding-bottom: 0.15rem;
			margin-bottom: 0.1rem;
			span{
				padding-right: 0.1rem;
				text-align: right;
				display: inline-block;
				float: left;
				width: 0.7rem;
			}
			input{
				color:#777;
				border: none;
				font-size: 0.2rem;
				outline: none;
				display: inline-block;
			}
			.registbtn{							
				display: block;
				background: #1e7dd7;
		    	border: 1px solid #1e7dd7;   	
		    	border-radius: 0.27rem;
		    	line-height: 0.5rem;
		    	width: 100%;
				text-align: center;
				margin: 0 auto;
				color: white;
				font-size: 0.22rem;
			}
			p{
				color: #1e7dd7;
				font-weight: 700;
			}
			
		}
	}
}
</style>