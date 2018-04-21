<template>
<div class="homemovie">
  <div class="moiveinfo" v-if="iscreate" :style="{height: height}">
    <div id="bgc" :style="{ 'background-image': 'url(' + moviedetail.image + ')','background-repeat':'no-repeat','background-size':'cover' }">
      <p></p>
    </div>
    <div class="info">
      <div class="detail">
        <img :src="moviedetail.image" alt="">
        <div class="desc">
          <h2>{{moviedetail.titleCn}}</h2>
          <p class="enname">{{moviedetail.titleEn}}</p>
          <p class="runtime">{{moviedetail.runTime}}</p>
          <p class="type">{{moviedetail.type[0]}} / {{moviedetail.type[1]}} / {{moviedetail.type[2]}}</p>
          <p class="showtime">{{moviedetail.release.date}} {{moviedetail.release.location}}上映 </p>
          <p class="btn">
            <span class="watch">我想看</span>
            <span class="evaluate">我要评分</span>
          </p>
        </div>
      </div>
      <h3 v-if="moviedetail.commonSpecial"><span>“</span> {{moviedetail.commonSpecial}}</h3>
      <div class="query">查询</div>
    </div>
  </div>
  <div class="content">
    <p class="desc" ref="sub">{{moviedetail.content}}</p>
    <p class="btn" ref="btn" @click="moreandless()"><i :class="ismore?'iconfont icon-moreunfold':'iconfont icon-less'"></i></p>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      moviedetail: [],
      iscreate:false,
      movieinfoheight : "3.16",
      subheight:"",
      ismore:true,
    }
  },
  mounted() {
    axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}`)
      .then(res => {
        this.moviedetail = res.data;
        this.iscreate = true;
      })
      this.subheight = this.$refs.sub.style.height;
      this.$refs.sub.style.height ="0.36rem";
  },
  computed:{
    height(){
      return this.moviedetail.commonSpecial?'3.4rem':'3.1rem';
    }
  },
  methods:{
    moreandless(){
      if(this.ismore){
        this.$refs.sub.style.height =this.subheight;
        this.ismore = false;
      }else{
        this.$refs.sub.style.height ="0.36rem";
        this.ismore = true;
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.moiveinfo {
    text-align: left;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 3.5rem;
    border-bottom: #f6f6f6 0.16rem solid;
    #bgc {
        width: 100%;
        height: 1.65rem;
        overflow: hidden;
        border-bottom: 0.01rem solid #999;
        position: relative;
        p {
            position: absolute;
            bottom: -0.46rem;
            left: -10%;
            width: 120%;
            height: 0.92rem;
            border-radius: 50%;
            z-index: 9;
            background-color: #fff;
        }
    }
    #bgc:after {
        content: '';
        display: block;
        background: rgba(0,0,0,0.8);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    .info {
        position: absolute;
        top: 0.6rem;
        width: 100%;
        z-index: 10;
        .detail {
            display: flex;
            img {
                width: 34%;
                height: 1.85rem;
                margin: 0 3%;
            }
            .desc {
                width: 60%;
                h2 {
                    font-size: 0.2rem;
                    line-height: 0.24rem;
                    color: #fff;
                    padding: 0.05rem 0;
                }
                .enname {
                    font-size: 0.16rem;
                    line-height: 0.18rem;
                    color: #fff;
                    padding-bottom: 0.2rem;
                }
                .runtime,
                .showtime,
                .type {
                    font-size: 0.18rem;
                    line-height: 0.24rem;
                    color: #000;
                }
                .btn {
                    font-size: 0.16rem;
                    span {
                        display: inline-block;
                        font-size: 0.2rem;
                        line-height: 0.35rem;
                        border: 0.01rem solid #659d0e;
                        width: 40%;
                        text-align: center;
                        margin: 0.05rem 0.05rem 0 0;
                        border-radius: 0.2rem;
                        color: #777;
                    }
                    .evaluate{
                      color: #659d0e;
                    }
                }
            }
        }
        h3 {
            font-size: 0.2rem;
            line-height: 0.24rem;
            color: #fd8900;
            text-align: center;
            font-weight: normal;
            margin-top: 0.1rem;
        }
        .query {
            box-sizing: border-box;
            text-align: center;
            font-size: 0.2rem;
            line-height: 0.4rem;
            color: #fff;
            background-color: #fd8900;
            margin:0.1rem;
            border-radius: 0.2rem;
        }
    }
}

.content{
  text-align: left;
  padding:0.12rem 0.17rem;
  p{
    line-height: 0.18rem;
    font-size: 0.16rem;
    color: #333;
    overflow: hidden;
  }
  .btn{
    text-align: center;
  }
}
</style>
