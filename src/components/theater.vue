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
		<div class="swiper-slide" v-for="data,index in moviedetail1" :key="data.movieId" @click="handleclick(index,data.title,data.length,data.type,data.movieId)" >
			<img :src="data.img" :style="{border:index==num ? '1px solid white':''}"/>
			<p>{{data.title}}</p>
		</div>
	</div>
</div>
	<!--引入组件-->
		<timeDetail :moviename="title" :movietime="movielength" :movietype="type" ></timeDetail>
<!--<p v-if="moviedate">{{moviedate[0].salePrice}}</p>-->
		<!--<div class="datalist" v-if="moviedate">
			<div class="detailaxios" v-for="data,index in moviedate">
				{{new Date(data.showDay*1000).getData()}}
			</div>
		</div>-->
	
</div>
</template>

<script>
	import '../../static/iconFontIcon/iconfont.css';
	import router from "../router";
	import axios from "axios";
	import Swiper from "../../static/swiper-4.2.2.min.js";
	import timeDetail from "./timeDetail";
	export default{
		name:"swiper",
		data(){
			return{
				moviedetail:null,
				moviedetail1:null,
				moviedate:null,
				title:"狂暴巨兽",
				movielength:"108分钟",
				type:"动作 | 冒险 | 科幻",
				num:-1,
				id:225925
			}
		},
		methods:{
			handleclick(index,title,length,type,id){
				this.num = index;
				this.title=title;
				this.movielength=length;
				this.type=type;
				this.id=id;
				console.log(id);
			}
		},
		mounted(){
			//swiper=----------------------
				const swiper = new Swiper('.swiper-container', {
					slidesPerView: 4,
					spaceBetween: 80,
					centeredSlides: true,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
				});

			axios.get(`/Service/callback.mi/Showtime/ShowtimeMovieAndDateListByCinema.api?cinemaId=${this.$route.params.cinemaId}&t=201841816104838200`).then(res=>{
			this.moviedetail=res.data;
			this.moviedetail1=res.data.movies;
//				console.log(res.data);
			})
			
			axios.get(`/Service/callback.mi/showtime/ShowTimesByCinemaMovieDate.api?cinemaId=${this.$route.params.cinemaId}&movieId=${this.id}&date=2018-04-19&t=20184191723662115`).then(res=>{
				console.log(res.data);
				this.moviedate=res.data.s;
				console.log(this.moviedate);
			})
			
			
			
		},
		components:{
			timeDetail
		},
				}
</script>

<style type="text/css" lang="scss" scoped>
@import "../../static/swiper-4.2.2.min.css";
p,ul,li,h2,h3,div{
	margin: 0;
	padding: 0;
}
.contain{
	overflow: hidden;
	font-size: 0.14rem;
	border: 1px solid chocolate;
	
.topdetail{
	padding: 0.1rem 0.05rem 0.25rem 0.05rem;
	display: flex;
	justify-content: space-around;
	align-content: flex-start;
	align-items: center;
	.dianname{
		width: 2.5rem;
		text-align: left;
	}
	.detaicon{
		margin-top: 0.1rem;		
			
		i{
			line-height: 0.20rem;
			padding: 0.02rem;
			display: inline-block;
			color: #6d8297;
	    	border: 1px solid #458B00;   
	    	font-style: normal; 
	    	margin-right: 0.05rem;	
	    	color:#458B00 ;
	}
	}
	.icondetail{				
		i{
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
      	justify-content:space-around;
       .swiper-slide {
      	align-items:center;
      		margin-top: 0.18rem;
      	
     	 img{
     	 	display: block;
     	 	width: 0.93rem;
     	 	height: 1.2rem;
     	 	
      	}
      	p{
      		width: 0.93rem;
      		margin-left: 0 auto;
      		color: white;
      		margin-top: 0.05rem;
      		overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
      	}
    }
    }
    
}



			
		
</style>