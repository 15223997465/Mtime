<template>
	<div id="videos">
		<div id="firstVideo" v-if="topVideo.trailer">
			<div id="imgbox">
				<img :src="topVideo.trailer.imageUrl" :alt="topVideo.trailer.title" id="firstImg" />
				<i class="icon iconfont icon-play" @click="showVideo(topVideo.trailer.title,topVideo.trailer.mp4Url)"></i>
			</div>	
			<div id="firstTitle">{{topVideo.trailer.title}}</div>
		</div>
		<div id="tabVideos">
			<div v-for="(item,index) in listVideo" id="forBox" :key="item.id">
				<div id="videobox">
					<img :src="item.coverImg" id="imgBox"/>	
					<i class="icon iconfont icon-play"  @click="showVideo(item.movieName,item.url)"></i>
				</div>
				
				<div id="infoBox">
					<h2>{{item.movieName}}</h2>
					<p>{{item.summary}}</p>
				</div>
			</div>
				
		</div>
		
	<div id="compo" v-if="compShow">
			<div id="videoNav">
				<div id="closebtn" @click="closeVideo()"><i class="icon iconfont icon-close"></i></div>
				<h3>{{videoTitle}}</h3>
				<div id="share"><i class="icon iconfont icon-fenxiang"></i></div>
			</div>
			<video id="video" :src=videoUrl autoplay="autoplay" controls="controls" ></video>
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
				topVideo:{},
				listVideo:[],
				page:1,
				bottomInfo:"",
				state:true,
				videoTitle:"",
				videoUrl:"",
				compShow:false,
				scrolltop:0
				
				
				
			}
			
		},
		methods:{
			getTData:function(url){
				
				axios.get(url).then(res=>{
				this.state=true;
				var timer=setTimeout(()=>{
				this.topVideo=res.data;		
				},1000);
				
				
				}).catch(err=>{ console.log(err) });
				
				},
			getLData:function(url){
				axios.get(url).then(res=>{ 		
				 var timer=setTimeout(()=>{
				this.listVideo=res.data.trailers; 
				this.state=false;		
				},1000);
				}).catch(err=>{ console.log(err) });
			},
			showVideo:function(name,url){
				this.compShow=true;
				this.videoTitle=name;
				this.videoUrl=url;
				this.scrolltop=document.documentElement.scrollTop||document.body.scrollTop
				document.documentElement.scrollTop=0;
				document.documentElement.style.overflow='hidden';
			},
			closeVideo:function(){
				this.compShow=false;
				document.documentElement.scrollTop=this.scrolltop;
				document.documentElement.style.overflow='auto';
			}
				
			
		},
		mounted(){
			
			this.getTData("/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api?t=2018419943275129");
			this.getLData("/Service/callback.mi/PageSubArea/TrailerList.api?t=20184191215644098");
			
			
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
html,body,h2,p,h3{
	margin: 0;
	padding: 0;
}
#videos{
	width: 100%;
	#firstVideo{
		width: 100%;
		#imgbox
		{
			position: relative;
			#firstImg{
			width: 100%;
			height: 1rem;
			font-size: 0.08rem;
			text-align: left;
			}
			i{
				opacity: 0.4;
				color: #00162A;
				position: absolute;
				right: 0;
				bottom: 0;
				font-size: 0.48rem;
				
			}
		}
		#firstTitle{
			width: 100%;
			height: 0.5rem;
			line-height: 0.5rem;
			background: #1D3E81;
			color: white;
			font-size: 0.3rem;
			font-weight: 800;
		}
	}
	#tabVideos{
		width: 90%;
		margin: 0 auto;
		#forBox{
			margin-top: 0.15rem;
			padding-bottom: 0.15rem;
			border-bottom: 1px solid #DEDEDE;
			width: 100%;
			justify-content: space-between;
			display:flex;
			#videobox{
				position: relative;
				#imgBox{
				margin-right: 0.15rem;
				}
				i{
					opacity: 0.7;
					color: white;
					position: absolute;
					bottom: 0;
					right: 0.15rem;
					font-size: 0.4rem;
				}
			}
			
			#infoBox{
				flex: 1;
				
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
					margin: 0.2rem auto;
					padding-left: 0.1rem;
					color: 	#D6D6D6;
				}
			}
		}
	}
	#compo{
		width: 100%;
		height: 100%;
		background: #00162A;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		#videoNav{
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: white;
			height: 0.5rem;
			font-size: 0.25rem;
			text-align: center;
			#closebtn{
				width: 0.45rem;
				height: 0.5rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			h3{
				flex: 1;
				font-size: 0.15rem;
			}
			#share{
				width: 0.45rem;
				height: 0.5rem;
				display: flex;
				justify-content: center;
				align-items: center;

			}
		}
		#video{
			width: 100%;
		}
		
	}
	#more{
			padding-top: 0.15rem;
			padding-bottom: 0.15rem;
		    font-size: 0.18rem;
		    line-height: 0.3rem;
		    width: 100%;
		    img{
		    	margin: 0 auto;
		    }
		}
}
	
</style>