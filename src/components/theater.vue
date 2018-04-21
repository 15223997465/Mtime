<template>
<div class="contain">
	<div v-if="moviedetail" class="topdetail">
		<div class="dianname">
			<h2 class="name">{{moviedetail.cinema.name}}</h2>
			<p class="detaicon">
				<i v-if="moviedetail.cinema.feature.has3D==1">3D</i>
				<i v-if="moviedetail.cinema.feature.has4D==1">4D</i>
				<i v-if="moviedetail.cinema.feature.hasFeature4K==1">4k</i>
				<i v-if="moviedetail.cinema.feature.hasFeatureDolby==1">杜比</i>
				<i v-if="moviedetail.cinema.feature.hasFeatureHuge==1">巨幕</i>
				<i v-if="moviedetail.cinema.feature.hasIMAX==1">IMAX</i>
				<i v-if="moviedetail.cinema.feature.hasLoveseat==1">情侣座</i>
				<i v-if="moviedetail.cinema.feature.hasVIP==1">VIP</i>
				<i v-if="moviedetail.cinema.feature.hasPark==1">P</i>
			</p>
		</div>
		<p class="icondetail">
			<i class="iconfont icon-dianhua"></i>
			<i class="iconfont icon-map"></i>
		</p>
	</div>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="data,index in moviedetail1" :key="data.movieId" @click="handleclick(index)">
				<img :src="data.img" :style="{'border':index==num ? '1px solid white':''}" />
				<p class="tit">{{data.title}}</p>

			</div>
		</div>
	</div>
	<!--引入组件-->
		<div class="detaiName" v-if="data1">
			<div class="movieType">
				<h3>{{data1.title}}</h3>
				<p>{{data1.length}}-{{data1.type}}</p>
			</div>
			<ul class="dateriqi">
				<li class="riqi" v-for="datanum,dataindex in data1.showDates" :class="{dataactive:dataindex==ischangeNum}" @click="changeClass(dataindex)">
					{{datanum}}
				</li>
			</ul>
		</div>
		<div class="datalist" v-if="moviedate">
			<div class="datalistDetail" v-for="rdata,daindex in moviedate" 			v-if="rdata.salePrice!=0">				
				<p v-if="new Date(rdata.showDay*1000).getHours()>=10" class="showTime">					
						{{new Date(rdata.showDay*1000).getHours()}}
						:
					  <span v-if="new Date(rdata.showDay*1000).getMinutes()>=10">
					  	{{new Date(rdata.showDay*1000).getMinutes()}}
					  </span>
					  <span v-if="new Date(rdata.showDay*1000).getMinutes()<10">
					  	0{{new Date(rdata.showDay*1000).getMinutes()}}
					  </span>					
				</p>
				<p v-if="new Date(rdata.showDay*1000).getHours()<10" class="showTime">
					
						0{{new Date(rdata.showDay*1000).getHours()}}
					    :
					      <span v-if="new Date(rdata.showDay*1000).getMinutes()>=10">
					      	{{new Date(rdata.showDay*1000).getMinutes()}}
					      </span>
					      <span v-if="new Date(rdata.showDay*1000).getMinutes()<10">
					      	0{{new Date(rdata.showDay*1000).getMinutes()}}
					      </span>					
				</p>
				<p class="showlangue">
					<span>{{rdata.versionDesc}}/{{rdata.language}}</span>
					<span>{{rdata.hall}}</span>
				</p>
				<p class="showprice">
					<span>
						¥{{rdata.salePrice/100}}
					</span>
					<span>
						¥{{rdata.cinemaPrice/100}}
					</span>
				</p>
				<a class="shopcar">购票</a>
			</div>
		</div>

	
</div>
</template>

<script>
	import '../../static/iconFontIcon/iconfont.css';
	import router from "../router";
	import axios from "axios";
	import Swiper from "../../static/swiper-4.2.2.min.js";

	export default{
		name:"swiper",
		data(){
			return{
				moviedetail:null,
				moviedetail1:null,
				moviedate:null,
				ischangeNum:0,
				num:-1,
				isSwiper:true,
				data1:{},
				datetoday:null,
				id:"",
				startTime:"",
				dateTime:[]
			}
		},
		methods:{
			
			handleclick(index){
				this.num=index;				
				for(var i =0;i<this.moviedetail1.length;i++){
					if(i==index){						
						this.data1=this.moviedetail1[i];
						this.id=this.data1.movieId;
					}									
				}
				
				
				axios.get(`/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=${this.$route.params.cinemaId}&movieId=${this.id}&date=${this.datetoday}`).then(res=>{		
				this.moviedate=res.data.s;
				console.log(this.moviedate);
			})
			},
			
			
			changeClass(dataindex){
				this.ischangeNum=dataindex;
				this.datetoday=this.data1.showDates[dataindex];				
				axios.get(`/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=${this.$route.params.cinemaId}&movieId=${this.id}&date=${this.datetoday}`).then(res=>{			
				this.moviedate=res.data.s;
				console.log(this.moviedate);

			})
			}
									
		},
		mounted(){
			axios.get(`/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?
				cinemaId=${this.$route.params.cinemaId}&t=${this.datetoday}`).then(res=>{
			this.moviedetail=res.data;
			this.moviedetail1=res.data.movies;			
			this.movielength=res.data.movies[0].length;
			this.data1=res.data.movies[0];	
			this.id=res.data.movies[0].movieId;
			this.datetoday=this.data1.showDates[0];
			console.log(this.moviedetail1=res.data.movies);
			}).catch(err=>{
				console.log(err);
			})
			
			axios.get(`/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=${this.$route.params.cinemaId}&movieId=${this.id}&date=${this.datetoday}`).then(res=>{			
				this.moviedate=res.data.s;
				
			})
		},
		 updated(){
		 	if(this.isSwiper){
		 		const swiper = new Swiper('.swiper-container', {
					slidesPerView: 4,
					spaceBetween: 80,
					centeredSlides: true,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
				});
				this.isSwiper=false;
		 	}
			
		},

				}
</script>

<style type="text/css" lang="scss" scoped>
	@import "../../static/swiper-4.2.2.min.css";
p,
ul,
li,
h2,
h3,
div {
	margin: 0;
	padding: 0;
}

.contain {
	overflow: hidden;
	font-size: 0.14rem;
	border: 1px solid chocolate;
	.topdetail {
		padding: 0.1rem 0.05rem 0.25rem 0.05rem;
		display: flex;
		justify-content: space-around;
		align-content: flex-start;
		align-items: center;
		.dianname {
			width: 2.5rem;
			text-align: left;
		}
		.detaicon {
			margin-top: 0.1rem;
			i {
				line-height: 0.20rem;
				padding: 0.02rem;
				display: inline-block;
				color: #6d8297;
				border: 1px solid #458B00;
				font-style: normal;
				margin-right: 0.05rem;
				color: #458B00;
			}
		}
		.icondetail {
			i {
				display: inline-block;
				color: red;
				border-left: 1px solid #d8d8d8;
				padding: 0rem 0.08rem;
				font-size: 0.25rem;
				color: #0F7DC8;
			}
		}
	}
	/*--------------插件swiper----------*/
	.swiper-container {
		background: #828282;
		padding-bottom: 0.20rem;
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: space-around;
		.swiper-slide {
			align-items: center;
			margin-top: 0.18rem;
			img {
				display: block;
				width: 0.93rem;
				height: 1.2rem;
			}
			.tit {
				width: 0.93rem;
				margin-left: 0 auto;
				color: white;
				margin-top: 0.05rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
			}
		}
	}
	.detaiName {
		width: 100%;
		.movieType {
			padding: 0.1rem;
			text-align: center;
			h3 {
				color: #333;
				font-size: 0.2rem;
			}
			p {
				color: #777;
				font-size: 0.16rem;
				padding: 0.1rem;
			}
		}
		.dateriqi {
			overflow: hidden;
			width: 200%;
			background: #f6f6f6;
			border-top: 1px solid #d8d8d8;
			border-bottom: 1px solid #d8d8d8;
			border: 0.01px solid red;
			color: #333;
			.riqi {
				float: left;
				width: 20%;
				padding: 0.1rem 0 0.1rem;
				font-size: 0.25rem;
				color: #333;
				text-align: center;
				
			}
			.dataactive {
				color: #1e7dd7;
				font-weight: 700;
				border-bottom: 0.02rem solid #1e7dd7;
			}
		}
	}
    .datalist{
    	font-size: 0.15rem;
    	.datalistDetail{
    		border-bottom: 1px solid #d8d8d8;
    		padding: 0.15rem;
    		display: flex;
    		justify-content: space-around;
			align-items:center;
    		.showTime{
    			font-size: 0.25rem;
    			font-weight: 800;
    			color: #333;
    		}
    		.showlangue{
    			span{
    				display: block;
    				padding: 0.05rem;
    			}
    		}
    		.showprice{
    			span{
    				display: block;
    				padding: 0.05rem;
    			}
    			span:nth-of-type(1){
    				color: #ff8600;
    				font-weight: 800;
    				font-size: 0.2rem;
    			}
    			span:nth-of-type(2){
    				text-decoration: line-through;
    			}
    		}
    		.shopcar{
    			background: #ff8600;
    			padding: 0.05rem 0.3rem;
    			border-radius:0.2rem;
    			color: white;
    			font-size: 0.2rem;
    		}
    	}
    }
    
}



			
		
</style>