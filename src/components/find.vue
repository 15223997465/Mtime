<template>
<div>
	<ul>
		<router-link tag="li" to="/find/news" activeClass="active">新闻</router-link>
		<router-link tag="li" to="/find/review" activeClass="active">预告片</router-link>
		<router-link tag="li" to="/find/toplist" activeClass="active">排行榜</router-link>
		<router-link tag="li" to="/find/trailer" activeClass="active">影评</router-link>

	</ul>


		<router-view></router-view>
</div>
</template>

<script>
	import axios from "axios";

	export default{
		data(){
			return {


			}

		},
		methods:{
			/*tab(index){
				this.num=index;
				this.$router.push({path:this.paths[index]});
			}*/
		},
		component:{


		},

		mounted(){
			/*ajax请求数据,调用完后本身是一个promise对象*/
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
		height: 3rem;
		background:#FAFAFA;
		li{

			text-align: center;
			list-style: none;
			flex: 1;
			}
		.active{
			font-weight: 600;
			color: mediumblue;
		}
	}
</style>
