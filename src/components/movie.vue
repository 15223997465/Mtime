<template>
	
	<div>
		<!--头部-->
		<div class="location">
			<span class="city">重庆
				<i class="iconfont icon-xiajiantou1"></i>
			</span>
			<p class="textbox">
				<i class="iconfont icon-icon--"></i>
				<input type="text" placeholder="筛选影院"/>
			</p>				
				<span class="search">搜索</span>						
		</div>
		<!--离我最近-->
		<ul class="distance">
			<li  v-for="item,index in tabs" :class="{active:index==num}" @click="tab(index)">
				<a>{{item}}
				<i v-if="index==num" class="iconfont icon-shangjiantou"></i>
				<i v-if="index!=num" class="iconfont icon-xiajiantou"></i>
				<!--<i v-if="index==num":class="state? 'iconfont icon-xiajiantou':'iconfont icon-shangjiantou'"></i>-->
				</a>
			</li>
		</ul>
		<div class="detailDate">
			<ul>
				<li v-for="data,index in looplist" :key="data.cinemaId" @click="detailClick(data.cinemaId)">
						<p class="cinameName">
							<span class="cinameName">{{data.cinameName}}</span>
							<span class="price">{{data.minPrice/100}}<i>元起</i></span>
						</p>
						<p class="address">{{data.address}}</p>
						<!--<p>{{data.feature.has3D}}</p>-->	
						<p class="showicon">
							<i v-if="data.feature.has3D==1">3D</i>
							<i v-if="data.feature.hasFeature4D==1">4D</i>
							<i v-if="data.feature.hasFeature4K==1">4k</i>
							<i v-if="data.feature.hasFeatureDolby==1">杜比</i>
							<i v-if="data.feature.hasFeatureHuge==1">巨幕</i>
							<i v-if="data.feature.hasIMAX==1">IMAX</i>							
							<i v-if="data.feature.hasLoveseat==1">情侣座</i>
							<i v-if="data.feature.hasVIP==1">VIP</i>
						</p>
							
				</li>
			</ul>
		</div>
		<div class="goTop">
			
		</div>	
	</div>
</template>

<script>
	import axios from "axios";
	import router from "../router";
	import '../../static/iconFontIcon/iconfont.css';
export default {
	data() {
		return {
			tabs: ["离我最近", "全城", "影院特效"],
			num: -1,
			state: true,
			looplist:[]
		}
	},
	methods: {
		tab(index) {
			this.num = index;
			this.state = !this.state
		},
		detailClick(cinemaId){
			router.push(`/theater/${cinemaId}`);
			
		}
	},
	mounted() {//ajax请求数据,调用完后本身是一个promise对象
		axios.get("/api/proxy/ticket/OnlineLocationCinema/OnlineCinemasByCity.api?locationId=974&_=1523962627531")
			.then(res => {				
				this.looplist=res.data;
			}).catch(err => {

			})
	}

}
</script>

<style type="text/css" lang="scss" scoped>
ul,p,li{
	margin: 0;
	padding: 0;
}
	div{
			font-size: 0.14rem;		
		.location{
			background:#f6f6f6;
			display:flex;
			justify-content:space-around;
			align-items: center;
			padding: 0.16rem 0.08rem;
			
			border-bottom: 1px solid #d8d8d8;
			.city{
				
				i{
					font-weight: 800;
					color:#bbb;
				}
			}
			.textbox{
				
				width: 1.6rem;
				border: 1px solid #bbb;
				border-radius: 0.08rem;
				line-height: 35px;
				height: 35px;
				background: white;
				i{
					font-size: 0.23rem;
					margin-left: 4px;
					color: #bbb;
					display: inline-block;
					float: left;
				}				
				input{
					width: 1.2rem;
					background: none;
					outline: none;
					display: inline-block;
					line-height: 35px;	
					font-size: 0.14rem;				
					border: none;					
					float: left;
				}
				
			}
			.search{
				display: block;
				width: 0.6rem;
				border: 1px solid #fff;
				border-radius: 5px;
				height: 2.4em;
			    line-height: 2.4em;
			    text-align: center;
				
			}			
			}
			/*--------------------影院距离判断--------------------*/
			.distance{
				display: flex;				
				color: #777;
				line-height: 0.4rem;
				align-items: center;
				justify-content: center;
				background: white;
				border-bottom: 1px solid #d8d8d8;
				li{
					text-align: center;
					flex: 1;
					
					i{
						display: inline-block;
						font-size:0.05rem;
						-webkit-transform:scale(0.6);						
					}
				}
				.active{
					color: red;
			}
			}
			/*--------------------详情--------------------*/
			.detailDate{
				ul{
					
					li{
						color: #333;
						margin-left: 0.1rem;
						border-bottom: 1px solid #d8d8d8;
						overflow: hidden;
						padding: 0.15rem 0.15rem 0.15rem 0;
						.cinameName{
							line-height: 0.3rem;
							display: flex;
							justify-content: space-between;
							align-items: center;
							font-size: 0.17rem;	
									
							.price{
								color: #ff8600;
								font-size:0.2rem ;
							i{
								font-size:0.14rem;
								font-style: normal;
								}								
							}
						}
						.address{
							color: #777;
							display: flex;	
							text-align: left;	
							line-height: 0.2rem;					
						}
						.showicon{
							display: flex;
							margin-top: 0.09rem;
							i{
								padding: 0.02rem;
								display: inline-block;
								color: #6d8297;
    							border: 1px solid #6d8297;   
    							font-style: normal; 
    							margin-right: 0.05rem;							
							}
						}
					}
				}
			}

			
		}
	
</style>