<template>

	<div id="reviews">
		<div id="revTop" v-if="topReviews.review">
			<img :src="topReviews.review.imageUrl" id="retop" :alt="topReviews.review.title"/>
			<div id="reTitle">
				<img :src="topReviews.review.posterUrl" id="titleImg"/>
				<h4>
					{{topReviews.review.movieName}}
				</h4>
				<p>
					{{topReviews.review.title}}
				</p>
				
			</div>
		</div>
		<div id="tabTops">
			<div id="forTops" v-for="item,index in listReviews" :key=item.id>
				<h3>{{item.title}}</h3>
				<p>
					<img :src="item.userImage" id="userImg"/>
					<span>{{item.nickname}}-评分
					《<b>{{item.relatedObj.title}}</b>》</span>
					<em v-if="item.rating">{{item.rating}}</em>
				</p>
			</div>
			
			
		</div>
		<div id="more">
			<img src="../assets/loading.gif" v-if="state"/>
		</div>
		
	</div>
	


</template>

<script>

	import axios from "axios";
	import "../assets/icon-font/iconfont.css";
	
	export default{
		
		data(){	
			
			return {
				topReviews:{},
				listReviews:[],
				state:true
				
				
				
			}
			
		},
		methods:{
			getTData:function(url){
				
					axios.get(url).then(res=>{ 	

							
					var timer=setTimeout(()=>{
					this.topReviews=res.data;
						
					},1000);	
					}).catch(err=>{ console.log("error") });
				
				
			},
			getRData:function(url){
				
					axios.get(url).then(res=>{ 	
						
						
					 var timer=setTimeout(()=>{
					this.listReviews=res.data;
					this.state=false;		
					},2000);	
					}).catch(err=>{ console.log("error") });
				
				
			}
		},
		mounted(){
			
			this.getTData("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018419943275129");
			this.getRData("/Service/callback.mi/MobileMovie/Review.api?needTop=false&t=2018420147306923");
			
			
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
#reviews{
	width: 100%;
	#revTop{
		width: 100%;
		
		#retop{
			font-size: 0.08rem;
			height: 1rem;
			
			
		}
		#reTitle{
			
			width: 100%;
			height: 0.7rem;
			background: rgba(0,0,0,0.4);
			position: relative;
			display: flex;
			h4{
				color: white;
				left: 1rem;
				position: absolute;
				font-size: 0.2rem;
			}
			#titleImg{
				position: absolute;
				bottom: 0;
				width: 0.7rem;
				left: 0.15rem;
				bottom: 0.15rem;
			}
			p{
				bottom: 0.15rem;
				position: absolute;
				left: 1rem;
				font-size: 0.14rem;
				color:whitesmoke;	
				text-align: center;
					
			}
		}		
	}
	
	#tabTops{
	    margin: 0 auto;
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
				height: 0.2rem;
				display: flex;
				#userImg{
					width: 0.2rem;
					display: inline-block;
					border-radius: 0.1rem;
				}
				span{
					color: gray;
					height: 0.2rem;
					line-height: 0.2rem;
					margin-left: 0.05rem;
				}
				em{
					height: 0.2rem;
					padding-left: 0.05rem;
					padding-right: 0.05rem;
					line-height: 0.2rem;
					background: green;
					color: white;
					font-style: normal;
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
</style>