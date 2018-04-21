<template>
<div class="willcome">
  <div class="attention">
    <h2>最受关注<span>（{{homeattention.length}}部）</span></h2>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="data in homeattention">
          <p class="time">{{data.rMonth}}月{{data.rDay}}日</p>
          <div class="info">
            <img :src="data.image" alt="" @click="homemovie(data.id)">
            <div class="movieinfo">
              <h3>{{data.title}}</h3>
              <p class="want"><span>{{data.wantedCount}}</span> 人想看 - {{data.type}}</p>
              <p class="director">导演：{{data.director}}</p>
              <p class="actor">演员：{{data.actor1}},{{data.actor2}}</p>
              <p class="btn">
                <span class="pre-sale" v-if="data.isTicket">超前预售</span>
                <span class="trailer" v-if="data.isVideo">预告片</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="willcomemovie">
    <h2>即将上映<span>（{{homemoviecomings.length}}部）</span></h2>
    <div class="mouth" v-for="mouth in homemouth">
      <p class="m">{{mouth}}月</p>
      <ul>
        <li v-for="data in homemoviecomings" v-if="data.rMonth == mouth">
          <p class="time">{{data.rDay}}日</p>
          <div class="info">
            <img :src="data.image" alt="" @click="homemovie(data.id)">
            <div class="movieinfo">
              <h3>{{data.title}}</h3>
              <p class="want"><span>{{data.wantedCount}}</span> 人想看 - {{data.type}}</p>
              <p class="director">导演：{{data.director}}</p>
              <p class="btn">
                <span class="pre-sale" v-if="data.isTicket">超前预售</span>
                <span class="trailer" v-if="data.isVideo">预告片</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios"
import router from "../router"
export default {
  data() {
    return {
      homeattention: [],
      homemoviecomings: [],
      homemouth: [],
    }
  },
  mounted() {
    axios.get("/Service/callback.mi/Movie/MovieComingNew.api?locationId=291")
      .then(res => {
        this.homeattention = res.data.attention;
        this.homemoviecomings = res.data.moviecomings;
        this.homemouth = this.homemoviecomings.map(item => {
          return item.rMonth;
        })
        this.homemouth = Array.from(new Set(this.homemouth))
      })
  },
  updated() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  },
  methods:{
    homemovie(id){
      router.push(`/homemovie/${id}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.willcome {
    text-align: left;
    color: #333;
    box-sizing: border-box;
    padding: 0.14rem 0.17rem 0.17rem;
    .willcomemovie {
        box-sizing: border-box;
        padding: 0.17rem 0;
        h2 {
            line-height: 0.22rem;
            font-size: 0.22rem;
            span {
                color: #999;
            }
        }
        .mouth {
            .m {
                line-height: 0.44rem;
                font-size: 0.16rem;
                border-bottom: 0.01rem solid #bbb;

            }
            ul {
                li:last-child .info {
                    border: 0;
                }
                li {
                    position: relative;
                    .time {
                        line-height: 0.2rem;
                        font-size: 0.16rem;
                        color: #999;
                        position: absolute;
                        top: 0.17rem;
                    }
                    .info {
                        display: flex;
                        justify-content: space-around;
                        box-sizing: border-box;
                        margin-left: 0.35rem;
                        padding: 0.17rem 0;
                        border-bottom: 0.01rem solid #d8d8d8;
                        img {
                            width: 25%;
                            height: 1.1rem;
                        }
                        .movieinfo {
                            width: 70%;
                            h3 {
                                font-size: 0.18rem;
                                line-height: 0.2rem;
                            }
                            .director,
                            .want {
                                font-size: 0.14rem;
                                line-height: 0.2rem;
                                span {
                                    color: #ff8600;
                                }
                            }
                            .btn {
                                font-size: 0.2rem;
                                margin-top: 0.1rem;
                                span {
                                    width: 40%;
                                    display: inline-block;
                                    line-height: 0.34rem;
                                    background: #ff8600;
                                    color: #fff;
                                    border: 1px solid #ff8600;
                                    text-align: center;
                                    border-radius: 0.4rem;
                                    font-size: 0.16rem;
                                    margin-left: 5%;
                                }
                                .trailer {
                                    border: 1px solid #659c0d;
                                    color: #659c0d;
                                    background-color: #fff;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
.attention {
    h2 {
        line-height: 0.22rem;
        font-size: 0.22rem;
        span {
            color: #999;
        }
    }
    .swiper-container {
        width: 3.3rem;
        height: 1.6rem;
        padding-top: 0.15rem;
        .swiper-slide {
            background: #fff;
            width: 90%;
            padding-top: 0.1rem;
            border-top: 0.01rem solid #bbb;
            border-right: 0.01rem solid #bbb;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            position: relative;
            .time {
                line-height: 0.2rem;
                font-size: 0.16rem;
                color: #999;
                position: absolute;
                top: -0.1rem;
                left: 0;
                background: #fff;
                z-index: 2;
            }
            .info {
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                img {
                    width: 30%;
                    height: 1.5rem;
                }
                .movieinfo {
                    width: 65%;
                    h3 {
                        font-size: 0.18rem;
                        line-height: 0.2rem;
                        margin-bottom: 0.1rem;
                    }
                    .actor,
                    .director,
                    .want {
                        font-size: 0.14rem;
                        line-height: 0.2rem;
                        width: 100%;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        span {
                            color: #ff8600;
                        }
                    }
                    .btn {
                        font-size: 0.2rem;
                        margin-top: 0.1rem;
                        span {
                            width: 40%;
                            display: inline-block;
                            line-height: 0.3rem;
                            background: #ff8600;
                            color: #fff;
                            border: 1px solid #ff8600;
                            text-align: center;
                            border-radius: 0.4rem;
                            font-size: 0.16rem;
                            margin-right:5%;
                        }
                        .trailer {
                            border: 1px solid #659c0d;
                            color: #659c0d;
                            background-color: #fff;
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
