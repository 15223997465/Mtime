<template>
<div class="nowplaying">
  <ul>
    <li v-if="ms" v-for="data in ms">
      <img :src="data.img" alt="" @click="homemovie(data.id)">
      <div class="info">
        <h3>
            <b>{{data.t}}</b>
            <span v-if="data.r>0?true:false">{{data.r.toFixed(1)}}</span>
          </h3>
        <p class="desc">
          {{data.commonSpecial}}
        </p>
        <p class="show">
          <span v-if="data.is3D">3D</span>
          <span v-if="data.isDMAX">中国巨幕</span>
        </p>
        <p class="order">
          <span>{{data.NearestCinemaCount}}家影院上映{{data.NearestShowtimeCount}}场</span>
          <span class="btnbuy" v-if="data.isTicket">购票</span>
          <span class="btnshow" v-else>查影讯</span>
        </p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import axios from "axios";
import router from "../router"
export default {
  data() {
    return {
      ms: [],
    }
  },
  mounted() {
    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=291")
      .then(res => {
        //this.datalist= res.data.data.films
        this.mslength = res.data.ms.length;
        this.ms = res.data.ms;
      })
  },
  methods:{
    homemovie(id){
      router.push(`/homemovie/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.nowplaying {
    box-sizing: border-box;
    padding: 0 0.17rem;
    ul {
        li {
            padding: 0.17rem 0 0.1rem;
            overflow: hidden;
            text-align: left;
            border-top: 0.01rem solid #d8d8d8;
            img {
                width: 20%;
                height: 1.1rem;
                float: left;
            }
            .info {
                width: 77%;
                height: 1.1rem;
                float: right;
                font-size: 0.16rem;
                position: relative;
                h3 {
                    font-size: 0.18rem;
                    line-height: 0.24rem;
                    color: #333;
                    span {
                        color: #fff;
                        background-color: #659d0e;
                        text-align: center;
                        font-weight: normal;
                        display: inline-block;
                        font-size: 0.16rem;
                        padding: 0 0.02rem;
                    }
                }
                .desc {
                    color: #659d0e;
                    font-size: 0.16rem;
                    line-height: 0.24rem;
                }
                .show {
                    span {
                        border: 0.01rem solid #659d0e;
                        line-height: 0.2rem;
                        font-size: 0.18rem;
                    }
                }
                .order {
                    margin-top: 0.1rem;
                    position: absolute;
                    width: 100%;
                    bottom: 0;
                    span {
                        line-height: 0.3rem;
                        font-size: 0.16rem;
                        color: #999;
                    }
                    .btnbuy,
                    .btnshow {
                        display: block;
                        float: right;
                        background-color: #ff8600;
                        color: #fff;
                        text-align: center;
                        width: 0.8rem;
                        border-radius: 0.4rem;
                    }
                    .btnshow {
                        border: 1px solid #659c0d;
                        color: #659c0d;
                        background-color: #fff;
                    }
                }
            }
        }
        li:first-child {
            border: 0;
        }
    }
}
</style>
