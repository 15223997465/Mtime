<template>
	<div id="news">

		<div id="firstNews" v-if="topNews.news">
			<img :src="topNews.news.imageUrl"/>
		</div>
		<div id="tabNews">
			<div v-for="(item,index) in listNews" id="forBox" :key="item.id">
				<div v-if="item.type==1" id="frameBox" >
					<h2 @click="toDetail(item.id)">{{item.title}}</h2>
					
					<div id="imgbox" v-if="item.images[0]">
						<div id="itemimg"><img :src="item.images[0].url1"/></div>
						<div id="itemimg"><img :src="item.images[1].url2"/></div>
						<div id="itemimg"><img :src="item.images[2].url2"/></div>
						
					</div>
					<p>{{((new Date().getDate())-(new Date(item.publishTime*1000).getDate()))*24+new Date().getHours()+8-(new Date(item.publishTime*1000).getHours())}}小时前</p>
				</div>
				<div v-if="item.type==0" id="frameBox">
					<img :src="item.image" id="minImg"/>
					<h2 @click="toDetail(item.id)">{{item.title}}</h2>
					<p>{{((new Date().getDate())-(new Date(item.publishTime*1000).getDate()))*24+new Date().getHours()+8-(new Date(item.publishTime*1000).getHours())}}小时前<b>评论{{item.commentCount}}</b></p>				
				</div>
				<div v-if="item.type==2" id="frameBox">
					<img :src="item.image" id="minImg"/>
					<h2 @click="toDetail(item.id)">{{item.title}}</h2>
					<p>{{((new Date().getDate())-(new Date(item.publishTime*1000).getDate()))*24+new Date().getHours()+8-(new Date(item.publishTime*1000).getHours())}}小时前<b>评论{{item.commentCount}}</b></p>
				</div>
			</div>
			
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
				topNews:{},
				listNews:[],
				page:1,
				bottomInfo:"",
				state:true,
				maxPage:0
				
				
				
			}
			
		},
		methods:{
			toDetail(id){
				this.$router.push({
					path:`/find/news/newsdetail/${id}`
				});
			
			},
			handleMore:function (){		
				if(this.page>=this.maxPage)
				{	
					this.bottomInfo="没有更多新闻了";
				}
				else{
					this.page++;
					this.getData("/Service/callback.mi/News/NewsList.api?t=201841810523941798&pageIndex=",this.page);
				}
				
				
			},
			getData:function(url,currentpage){
				if(!currentpage)
				{
					axios.get(url).then(res=>{ 		
						this.topNews=res.data; }).catch(err=>{ console.log("error") });
				}
				if(currentpage){	
					axios.get(url+currentpage.toString()).then(res=>{ 
						this.state=true;
						var timer=setTimeout(()=>{this.listNews=[...this.listNews,...res.data.newsList] ;
							this.state=false;
							this.maxPage=res.data.pageCount;
						this.bottomInfo="加载更多";	
						},1000);
						
					}).catch(err=>{ console.log("error") });
						
				}
				
			}
		},
		mounted(){
			
			this.getData("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018419943275129");
			this.getData("/Service/callback.mi/News/NewsList.api?t=201841810523941798&pageIndex=",this.page);
			
			
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
	#news{
		width: 100%;
		#firstNews{
			width: 100%;
			img{
				width: 100%;
				height: auto;
			}
			
		}
		#tabNews{
			margin: 0 auto;
			width: 90%;
			#forBox{
				width: 100%;
				height: auto;
				#frameBox{
				
				margin: 0 auto;
				width: 100%;
				height: auto;
				padding-top:0.2rem ;
				padding-bottom:0.2rem ;
				border-bottom: 1px solid #DEDEDE;
				#minImg{
					width: 1rem;
					height: 0.7rem;
					float: left;
					margin-right: 0.25rem;
				}
				#imgbox{
					margin-top: 0.15rem;
					height: 0.6rem;
					display:flex;
					justify-content:center;
					
					#itemimg{
						overflow: hidden;
						width:1rem;
						max-height: 0.6rem;
						margin: 0.02rem;
						img{
						width: 1rem;
						height: 1rem;
					}
					}
					
				}
				h2{
					
					width: 100%;
					text-align: left;
					font-size: 0.15rem;
					margin: 0 auto;
					font-weight: bold;
					
				}
				p{
					text-align: left;
					font-size: 0.08rem;
					width: 100%;
					margin: 0.05rem auto;
					color: 	#D6D6D6;
					margin-top: 0.1rem;
					b{
						margin-left: 0.3rem;
						font-size: 0.06rem;
						font-weight: 400;
						color: 	#D6D6D6;
					}
				}
				
			}
			}
			
		}
		#more{
			padding-top: 0.15rem;
			padding-bottom: 0.15rem;
			height: 100%;
		    font-size: 0.18rem;
		    line-height: 0.3rem;
		    width: 100%;
		    img{
		    	margin: 0 auto;
		    }
		}
	}
</style>