<template>

	<div id="tops">
		<div id="firstTop" v-if="topTops.topList">
			<img :src="topTops.topList.imageUrl"/>
		</div>
		<div id="more" @click="handleMore()">
			<img src="../assets/loading.gif" v-if="state"/>
			<p v-else="!state">{{bottomInfo}}</p>
		</div>
		
		
	</div>
	


</template>

<script>

	import axios from "axios";
	import "../assets/icon-font/iconfont.css";
	
	export default{
		
		data(){	
			
			return {
				topTops:{},
				listTops:[],
				page:1,
				bottomInfo:"",
				state:true
				
				
				
			}
			
		},
		methods:{
			onload(){
				console.log(this.topNews);
			},
			handleMore:function (){		
				if(this.page>=10)
				{	
					this.bottomInfo="没有更多新闻了";
				}
				else{
					this.page++;
					this.getData("/Service/callback.mi/TopList/TopListOfAll.api?t=201841917463667490&pageIndex=",this.page);
				}
				
				
			},
			getData:function(url,currentpage){
				if(!currentpage)
				{
					axios.get(url).then(res=>{ 		
						this.topTops=res.data;
						
					}).catch(err=>{ console.log("error") });
				}
				if(currentpage){	
					axios.get(url+currentpage.toString()).then(res=>{ 
						console.log(res.data)
						this.state=true;
						var timer=setTimeout(()=>{this.listTops=[...this.listTops,...res.data.topLists] ;
							this.state=false;
						this.bottomInfo="加载更多";	
						},1000);
						
					}).catch(err=>{ console.log("error") });
						
				}
				
			}
		},
		mounted(){
			
			this.getData("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018419943275129");
			this.getData("/Service/callback.mi/TopList/TopListOfAll.api?t=201841917463667490&pageIndex=",this.page);
			
			
		}
		
	}

</script>

<style lang="scss" scoped>
img{
	display: block;
}
html,body{
	width: 100%;

}
html,body,h2,p{
	margin: 0;
	padding: 0;
}
</style>