<template>

	<div id="tops">
		<div id="firstTop" v-if="topTops.topList">
			<img :src="topTops.topList.imageUrl" id="toptop"/>
			<div id="firstTitle">
				<p>
					{{topTops.topList.title}}
				</p>
				
			</div>
		</div>
		<div id="thirdTop">
			<div id="timetop">
				<div><i class="icon iconfont icon-fire"></i></div>
				<p>时光top100</p>
			</div>
			<div id="chinatop">
				<div><i class="icon iconfont icon-msnui-bar-chart"></i></div>
				<p>华语top100</p>
			</div>
			<div id="alltop">
				<div><i class="icon iconfont icon-baobiao"></i></div>
				<p>全球票房榜</p>
			</div>
		</div>
		<div id="tabTops">
			<div id="forTops" v-for="item,index in listTops" :key=item.id>
				<h3>{{item.topListNameCn}}</h3>
				<p>{{item.summary}}</p>
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
						console.log(res.data.topLists)
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

<style lang="scss" scoped="scoped">
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
#tops{
	width: 100%;
	#firstTop{
		width: 100%;
		position:relative;
		#toptop{
			width: 100%;
			
		}
		#firstTitle{
			position: absolute;
			bottom: 0.6rem;
			width: 100%;
			height: 0.5rem;
			background: rgba(0,0,0,0.4);
			p{
				font-size: 0.25rem;
				color: white;	
				text-align: center;
				width: 100%;	
			}
		}		
	}
	#thirdTop{
			font-size: 0.25rem;
			display: flex;
			align-items: center;
			width: 100%;
			height: 1.5rem;
			margin-top: -0.7rem;
			background: white;
			position: absolute;
			font-size: 0.1rem;
			#timetop{
				flex: 1;
				flex-direction: column;
				display:flex;
				
				p{
					margin-top: 0.15rem;
					color: dodgerblue;
				}
				div{
					line-height: 0.6rem;
					margin: 0 auto;
					width: 0.6rem;
					height: 0.6rem;
					background: dodgerblue;
					border-radius: 0.3rem;
					i{
						color: white;
						font-size: 0.3rem;
					}
				}
			}
			#chinatop{
				flex: 1;
				flex-direction: column;
				display:flex;
				
				p{
					margin-top: 0.15rem;
					color:mediumseagreen
				}
				div{
					line-height: 0.6rem;
					margin: 0 auto;
					width: 0.6rem;
					height: 0.6rem;
					background: mediumseagreen;
					border-radius: 0.3rem;
					i{
						color: white;
						font-size: 0.3rem;
					
				}
			}
			}
			#alltop{
				flex: 1;
				flex-direction: column;
				display:flex;
				
				p{
					margin-top: 0.15rem;
					color:orange
				}
				div{
					line-height: 0.6rem;
					margin: 0 auto;
					width: 0.6rem;
					height: 0.6rem;
					background: orange;
					border-radius: 0.3rem;
					i{
						color: white;
						font-size: 0.3rem;
					}
				}
			}
		}
	#tabTops{
	    margin: 0 auto;
		
		margin-top:0.8rem;
		text-align: left;
		width: 90%;
		
		#forTops{
			border-top: 1px solid #DEDEDE;
			padding-top:0.18rem;
			padding-bottom:0.18rem;
			
			h3{
				font-size: 0.18rem;
				margin-bottom:0.12rem;
			}
			p{
				font-size: 0.12rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
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
</style>