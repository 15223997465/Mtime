<template>
	<div>
		<ul class="loginHead">
			<li class="userinfo">
				<i class="iconfont icon-denglu"></i>
				<p class="inputbox">
					<input type="text" placeholder="用户名" v-model="Lusername"/>
				</p>
			</li>
			<li class="userinfo">
				<i class="iconfont icon-icon-"></i>
				<p class="inputbox"style="border: 0;">
					<input type="password" placeholder="密码" v-model="Password"/>
				</p>
			</li>
		</ul>
		<a class="loginbtn" @click="loginBtn">登录</a>
		<p class="registBtn">
			<span class="registB" @click="registBtn">注册</span>
			<span>找回密码</span>
		</p>
		
	</div>
</template>

<script>
import '../../static/iconfontLogin/iconfont.css';
import router from "../router";	
	import axios from "axios";
	export default{
		
		
		data(){
			return{
				Lusername:"",
				Password:"",
				callback:null
				}
},
methods: {
	loginBtn(){
		var username=this.Lusername;
			var pwd=this.Password;
			axios.post('/Mlogin', {
					username,
					pwd
				})
				.then((response)=> {
					this.callback=response.data;	
					if(this.callback==2){
					router.push("/movie");
					}else{
						alert("用户名或密码错误");
					}
				})
				.catch(function(error) {
					console.log(error);
				});
				
	},
		registBtn() {
			router.push("/register");

		}
}

}</script>

<style type="text/css" lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
div{
	font-size: 0.14rem;
	color: #777;
	.loginHead{
		color: #777;
		margin-bottom: 0.25rem;
		box-shadow: 0 3px 3px rgba(51,51,51,0.1);
		li{
			/*border: 1px solid red;*/
			padding: 0.15rem 0 0 0.27rem;
			overflow: hidden;
			display: flex;
			justify-content: flex-start;
			
			i{
				display: inline-block;
				font-size: 0.3rem;
				padding-right: 0.16rem;
				float: left;
				
			}
			.inputbox{
				flex: 1;
				float: left;
				border-bottom: 2px solid #d8d8d8;
				padding-bottom: 0.18rem;
				input{
					height: 0.3rem;
					outline: none;
					width: 100%;
					border: none;
					font-size: 0.2rem;
				}
				
			}
			
		}
		
		
	}
	.loginbtn{
		display: block;
		background: #1e7dd7;
    	border: 1px solid #1e7dd7;   	
    	border-radius: 0.27rem;
    	line-height: 0.5rem;
    	width: 90%;
		text-align: center;
		margin: 0 auto;
		color: white;
		font-size: 0.22rem;
	}
	.registBtn{
		display: flex;
		padding: 0.17rem 0.15rem;
		justify-content: space-between;
		font-size: 0.17rem;
		
		.registB{
			font-weight: 800;
			color: #1e7dd7;   
		}
	}
}
</style>