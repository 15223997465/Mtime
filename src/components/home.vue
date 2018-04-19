<template>
<div class="home">
  <homeSearch></homeSearch>
  <!-- hot&&comming -->
  <div class="hotindex">
    <h2 class="hoth2" @click="nowplaying()">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>正在热映（46部）</b>
      </a>
    </h2>
    <ul v-if="mslength">
      <li v-for="i in 8">
        <img :src="ms[i-1].img" />
        <p>{{ms[i-1].t}}</p>
      </li>
    </ul>
    <h2 class="cominghot" @click="willcome()">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>即將上映（46部）</b>
      </a>
    </h2>
  </div>
  <!-- todayhot -->
  <div class="todayhot">
    <h2>今日热点</h2>
    <ul>
      <li v-for = "(data,index) in hotpoints" v-if ="hotpoints">
        <img :src="data.img" alt="">
        <div class="content">
          <h3>{{data.title}}</h3>
          <p class="info">{{data.desc}}</p>
          <p class="time">{{date[index].getFullYear()}}-{{date[index].getMonth()+1}}-{{date[index].getDate()}}
          {{date[index].getHours()}}:{{date[index].getMinutes()}}:{{date[index].getSeconds()}}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios";
import homeSearch from "./common/homesearch";
import router from "../router"
export default {
  data() {
    return {
      mslength: null,
      ms: [],
      hotpoints:[],
      date:[],
    }
  },
  components:{
    homeSearch,
  }
  ,
  mounted() {
    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=291")
    .then(res=>{
      //this.datalist= res.data.data.films
      this.mslength = res.data.ms.length;
      this.ms = res.data.ms;
    })
    axios.get("/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018419035368418")
    .then(res=>{
      this.hotpoints = res.data.hotPoints;
      for(var index in this.hotpoints){
        this.date.push(new Date(this.hotpoints[index].publishTime*1000));
      }
    });

  },
  methods:{
    nowplaying(){
      router.push("/homes")
    },
    willcome(){
      router.push("/homes")
    }
  }

}
</script>

<style lang="scss" scoped>
.home {
    box-sizing: border-box;
    //hot&&comming
    .hotindex {
        box-sizing: border-box;
        padding: 0.04rem 0.12rem 0.12rem;
        position: relative;
        zoom: 1;
        border-bottom: 0.14rem solid #f6f6f6;
        .cominghot {
            border-top: 0.01rem solid #d8d8d8;
        }
        h2 {
            font-size: 0.2rem;
            line-height: 0.4rem;
            text-align: left;
            a {
                display: block;
                line-height: 0.4rem;
                position: relative;
                b {
                    font-size: 0.2rem;
                    color: #333;
                }
                .i_tnext {
                    width: 0.25rem;
                    height: 0.12rem;
                    position: absolute;
                    right: 0;
                    top: 50%;
                    margin-top: -0.06rem;
                    overflow: hidden;
                    line-height: 0.4rem;
                    background: #fff url("http://static1.mtime.cn/html5/20180208104315/images/2014/i-tmore.png") no-repeat center center;
                    background-size: auto 0.12rem;
                    -webkit-transform: rotate(-90deg);
                }
            }
        }
        ul {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li {
                width: 23%;
                font-size: 0.15rem;
                margin-bottom: 0.2rem;
                img {
                    width: 100%;
                    height: 1.1rem;
                }
            }
        }
    }
    // todayhot
    .todayhot {
        box-sizing: border-box;
        padding: 0.06rem 0.12rem 0;
        text-align: left;
        h2 {
            line-height: 0.4rem;
            font-size: 0.2rem;
            text-align: left;
        }
        li {
            overflow: hidden;
            width: 100%;
            padding: 0.15rem 0;
						border-bottom: 0.01rem solid #777;
            img {
                width: 35%;
                height: 0.9rem;
                float: left;
            }
            .content {
                width: 60%;
                float: right;
                h3 {
                    font-size: 0.2rem;
                    line-height: 0.24rem;
                    color: #333;
                }
                .info {
                    font-size: 0.16rem;
                    line-height: 0.22rem;
                    color: #777;
                }
                .time {
                    font-size: 0.16rem;
                    line-height: 0.22rem;
                    color: #777;
                }
            }
        }
				li:first-child{
					padding-top:0;
				}
    }
}
</style>
