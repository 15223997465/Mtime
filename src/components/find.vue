<template>

	<div>
	<ul id="find">
		<router-link tag="li" to="/find/news" activeClass="active">新闻</router-link>
		<router-link tag="li" to="/find/trailer" activeClass="active">预告片</router-link>
		<router-link tag="li" to="/find/toplist" activeClass="active">排行榜</router-link>
		<router-link tag="li" to="/find/review" activeClass="active">影评</router-link>
	</ul>
	<div id="toTop" v-if="scrollState" @click="handleTotop()">
			  <i class="icon iconfont icon-top"></i>
		</div>
	<router-view></router-view>
	</div>



</template>

<script>
	import "../assets/icon-font/iconfont.css";
	
	export default{
		
		data(){
			return {
				scrollState:false
			}
		},
		methods:{
			handleScroll(){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				if(scrollTop>=350)
				{
					this.scrollState=true;
				}
				else{
					this.scrollState=false;
				}
			},
			handleTotop(){
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				clearInterval(timer);
				var timer=setInterval(function(){
					scrollTop-=30;
					if(document.documentElement.scrollTop)
					{
						document.documentElement.scrollTop=scrollTop;
					}
					if(document.body.scrollTop)
					{
						document.body.scrollTop=scrollTop;
					}
					if(scrollTop<=0)
					{
						clearInterval(timer);
						return false;
					}
				},1);
				
			}
		}
	}
</script>

<style lang="scss" scoped>
html,body,ul{
	width: 100%;
	padding: 0rem;
	margin: 0rem;
	
}
	ul{
		display: flex;
		align-items: center;
		width: 100%;
		height: 0.5rem;
		background:#FAFAFA;
		li{
			
			text-align: center;
			list-style: none;
			flex: 1;
			font-size: 0.18rem;
			}
		.active{
			font-weight: 600;
			color: mediumblue;
		}
	}
	#toTop{
			position: fixed;
			bottom: 0;
			right: 0.25rem;
			i{
				opacity: 0.6;
				font-size: 0.5rem;
			}
		}
</style>