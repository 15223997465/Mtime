<template>
	<div id="box">
		<div id="topNav">
			<i class="icon iconfont icon-left" id="back" @click="back()"></i>
			<p v-if="len">{{num}}/{{len}}</p>
			<i class="icon iconfont icon-share" id="share" ></i>
		</div>
		<div class="swiper-container">
			
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item,index in imglist">
					<img :src="item.url1" id="imgitem"/>
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next" @click="numadd()"></div>
			<div class="swiper-button-prev" @click="numdel()"></div>
	    </div>
		<div id="mainbox" v-html="data.content" ></div>
	</div>
</template>

<script>
	import Swiper from "swiper";
	import axios from "axios";
	import "../assets/icon-font/iconfont.css";
	import "../../static/swiper-4.2.2.min.js";
	import "../../static/swiper-4.2.2.min.css";
	export default{
		
		data(){
			
			return {
				
				data:{},
				imglist:[],
				len:null,
				num:1,
				isSwiper:true,
				swiperState:3
			}
		},
		methods:{
			numadd(){
				this.swiperState++;
				if(this.num>=1&&this.num<10&&this.swiperState==1)
				{
					this.num++;
					this.swiperState=3;
				}
			},
			numdel(){
				this.swiperState++;
				if(this.num>1&&this.num<=10&&this.swiperState==5)
				{
					this.num--;
					this.swiperState=3;
				}
			},
			back(){
				window.history.back();
			}
				
		},
		updated(){
			if(this.isSwiper)
			{
				var swiper = new Swiper('.swiper-container', {
				touchMoveStopPropagation : false,
				preventIntercationOnTransition : true,
				preventLinksPropagation : false,
     			 navigation: {
        			nextEl: '.swiper-button-next',
        			prevEl: '.swiper-button-prev',
      				},
      			on:{
    				slideNextTransitionEnd: ()=>{
    				if(this.num>=1&&this.num<10)
					{
						this.num++;
						
					}
    				},
    				 slidePrevTransitionEnd: ()=>{
    				 if(this.num>1&&this.num<=10)
					{
						this.num--;
						
					}
    				},
 				 },
    			});
    			this.isSwiper=false;
			}
			var main=document.getElementById("mainbox");
			var imgs=main.getElementsByTagName("img");
			for(var item in imgs)
			{
				if(imgs[item].style)
				{
					imgs[item].style.width="100%";//解决v-html渲染的富文本不能被定义CSS样式问题
				}
				
			}
		},
		mounted(){
			 
			axios.get("/Service/callback.mi/News/Detail.api?newsId="+this.$route.params.id).then(res=>{
				
				this.data=res.data;
				this.imglist=res.data.images;
				if(res.data.images)
				{
					this.len=res.data.images.length;
				}
			}).catch(err=>{
				console.log(err);
			})
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
#box{
	position: relative;
	top: 0;
	width: 100%;
}
	#topNav{
		width: 100%;
		display: flex;
		background:midnightblue;
		justify-content:space-between ;
		color: white;
		height: 0.5rem;
		align-items: center;
		i{
			
			width: 0.4rem;
			font-size: 0.25rem;
			
		}
		#back{
			text-align: left;
			margin-left: 0.1rem;
			border-right: 1px solid white;
		}
		#share{
			text-align: right;
			margin-right: 0.1rem;
			border-left: 1px solid white;
		}
		p{
			flex: 1;
			font-size: 0.25rem;
		}
		
	}
	#mainbox{
		overflow-x: hidden;
		width:90%;
		height: 100%;
		margin: 0 auto;
		margin-top: 0.15rem;
		font-size: 0.15rem;
		text-align: left;
	}
	.swiper-slide{
		width: 100%;
		#imgitem{
			width: 100%;
			height: 2.5rem;
		}
		img{
			width: 100%;
		}
		
	}
</style>