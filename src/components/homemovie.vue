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
          <p class="rating">{{moviedetail.rating}}</p>
        </div>
      </div>
      <h3 v-if="moviedetail.commonSpecial"><span>“</span> {{moviedetail.commonSpecial}}</h3>
      <div class="query">查影讯 / 购票</div>
    </div>
  </div>
  <div class="content">
    <p class="desc" ref="sub">{{moviedetail.content}}</p>
    <p class="btn" ref="btn" @click="moreandless()"><i :class="ismore?'iconfont icon-moreunfold':'iconfont icon-less'"></i></p>
  </div>
  <div class="border"></div>
  <div class="actor" v-if="iscreate">
    <h2 id="navh2">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>{{moviedetail.personCount}}职业演员</b>
      </a>
    </h2>
    <div class="actorlist">
      <div class="director" :directorId="moviedetail.director.directorId">
        <p>导演</p>
        <img :src="moviedetail.director.directorImg" alt="">
        <p class="directorcnname">{{moviedetail.director.directorName}}</p>
        <p class="directorenname">{{moviedetail.director.directorNameEn}}</p>
      </div>
      <div class="actors">
        <p>主要演员</p>
        <div class="actor1" v-for="(data,index) in moviedetail.actorList" :actorId="moviedetail.actorList[index].actorId" :ref="'actor'+index">
          <img class="b-img" :src="moviedetail.actorList[index].actorImg" alt="">
          <p class="actor1cnname">{{moviedetail.actorList[index].actor}}</p>
          <p class="actor1enname">{{moviedetail.actorList[index].actorEn}}</p>
          <img class="s-img" :src="moviedetail.actorList[index].roleImg" alt="">
          <p class="rolename">{{moviedetail.actorList[index].roleName}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="imglist">
    <h2 id="navh2">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>{{moviedetail.imageCount}}张图片</b>
      </a>
    </h2>
    <ul>
      <li v-if="iscreate" v-for="(data,index) in moviedetail.images">
        <img :src="data" alt="" />
      </li>
    </ul>
  </div>
  <div class="HotLongComments" v-if="iscreate&&HotLongComments.totalCount">
    <h2 id="navh2">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>精彩评论（{{HotLongComments.totalCount}}）</b>
      </a>
    </h2>
    <div class="longcomment">
      <h3>{{HotLongComments.comments[0].title}}</h3>
      <p class="comment">{{HotLongComments.comments[0].content.substring(0,50)}}...</p>
      <div class="user" :id="HotLongComments.comments[0].id">
        <img :src="HotLongComments.comments[0].headurl" alt="">
        <div class="info">
          <p class="nickname">{{HotLongComments.comments[0].nickname}}</p>
          <p class="detail">{{new Date(HotLongComments.comments[0].modifyTime).toLocaleString()}}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="totalComment" v-if="iscreate&&totalComment.totalCommentCount">
    <h2 id="navh2">
      <a href="javascript:void(0);">
        <i class="i_tnext"></i>
        <b>网友端评（{{totalComment.totalCommentCount}}）</b>
      </a>
    </h2>
    <ul>
      <li class="user" :id="totalComment.cts[index-1].tweetId" v-for="index in totalComment.cts.length">
        <img :src="totalComment.cts[index-1].caimg" alt="" />
        <div class="info">
          <p class="nickname"><span>{{totalComment.cts[index-1].ca}}</span> <span>{{new Date(totalComment.cts[index-1].cd).toLocaleString()}}</span></p>
          <p class="detail">{{totalComment.cts[index-1].ce}}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      moviedetail: [],
      iscreate: false,
      movieinfoheight: "3.16",
      subheight: "",
      ismore: true,
      HotLongComments: [],
      totalComment: [],
    }
  },
  computed: {
    height() {
      return this.moviedetail.commonSpecial ? '3.4rem' : '3.1rem';
    }
  },
  methods: {
    moreandless() {
      if (this.ismore) {
        this.$refs.sub.style.height = this.subheight;
        this.ismore = false;
      } else {
        this.$refs.sub.style.height = "0.36rem";
        this.ismore = true;
      }

    }
  },
  mounted() {
    var promiselist = [];
    promiselist.push(axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}`));
    promiselist.push(axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.$route.params.id}&pageIndex=1`));
    promiselist.push(axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.$route.params.id}&pageIndex=1`));

    Promise.all(promiselist).then(res => {
      this.moviedetail = res[0].data;
      this.HotLongComments = res[1].data;
      this.totalComment = res[2].data;
      this.iscreate = true;
    })
    // axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.$route.params.id}`)
    //   .then(res => {
    //     this.moviedetail = res.data;
    //     this.iscreate = true;
    //   })
  },
  updated() {
    if (this.ismore) {
      this.$refs.sub.style.height = "0.36rem";
    }
  },
}
</script>

<style lang="scss" scoped>
.homemovie {
    color: #000;
}
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
                    .evaluate {
                        color: #659d0e;
                    }
                }
                .rating {
                    position: absolute;
                    color: #fff;
                    background-color: #659d0e;
                    font-size: 0.2rem;
                    line-height: 0.3rem;
                    padding: 0 0.05rem;
                    top: 0.5rem;
                    right: 0.4rem;
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
            margin: 0.1rem;
            border-radius: 0.2rem;
        }
    }
}

.content {
    text-align: left;
    padding: 0.12rem 0.17rem;
    p {
        line-height: 0.18rem;
        font-size: 0.16rem;
        color: #333;
        overflow: hidden;
    }
    .btn {
        text-align: center;
        line-height: 0.24rem;
        font-size: 0.24rem;
        i {
            line-height: 0.24rem;
            font-size: 0.24rem;
        }
    }
}

.border {
    width: 100%;
    height: 0.06rem;
    border-bottom: 0.1rem solid #f6f6f6;
    border-top: 0.1rem solid #f6f6f6;
}

.actor {
    font-size: 0.16rem;
    box-sizing: border-box;
    padding: 0 0.1rem;
    border-bottom: 0.1rem solid #f6f6f6;
    .actorlist {
        text-align: left;
        display: flex;
        justify-content: space-between;

        .director {
            width: 33%;
            font-size: 0.16rem;
            border-right: 0.01rem solid #999;
            padding-right: 0.05rem;
            box-sizing: border-box;
            img {
                width: 1rem;
                height: 1.2rem;
                margin: 0.1rem 0 0.2rem;
            }
            p {
                font-size: 0.14rem;
                line-height: 0.16rem;
            }
            .directorcnname,
            .directorenname {
                text-align: center;
            }
        }
        .actors {
            width: 66%;
            box-sizing: border-box;
            padding-left: 0.05rem;
            p {
                font-size: 0.14rem;
                line-height: 0.2rem;
            }
            .actor1,
            .actor2 {
                width: 50%;
                float: left;
                box-sizing: border-box;
                padding: 0.05rem 0.05rem 0 0;
                .b-img {
                    width: 100%;
                    height: 1rem;
                }
                .actor1cnname,
                .actor1enname,
                .rolename {
                    font-size: 0.14rem;
                    line-height: 0.16rem;
                    word-break: keep-all;
                    text-align: center;
                }
                .s-img {
                    width: 50%;
                    margin: 10% 25%;
                    border-radius: 50%;
                }
            }
        }

    }
}

.imglist {
    font-size: 0.16rem;
    padding: 0 0.1rem 0.2rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #f6f6f6;
    ul {
        display: flex;
        box-sizing: border-box;
        justify-content: space-around;
        li {
            width: 23%;
            height: 0.7rem;
            overflow: hidden;
            img {
                width: 200%;
                margin-left: -50%;
            }
        }
    }
}

.HotLongComments {
    box-sizing: border-box;
    padding: 0.1rem;
    font-size: 0.16rem;
    text-align: left;
    border-bottom: 0.15rem solid #f6f6f6;
    .comment {
        line-height: 0.24rem;
        font-size: 0.18rem;
        padding: 0.1rem 0;
    }
    .user {
        display: flex;
        img {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            margin-right: 0.1rem;
        }
        .info {
            color: #777;
            p {
                line-height: 0.2rem;
            }
        }
    }
}

.totalComment {
    box-sizing: border-box;
    padding: 0.1rem;
    font-size: 0.16rem;
    text-align: left;
    ul {
        .user {
            display: flex;
            padding: 0.1rem 0 0.1rem;
            border-bottom: 0.01rem solid #d8d8d8;
            img {
                width: 0.4rem;
                height: 0.4rem;
                border-radius: 50%;
                margin-right: 0.1rem;
            }
            .info {
                color: #777;
                flex: 1 ;
                p {
                    line-height: 0.2rem;
                }
                .nickname{
                  display: flex;
                  justify-content:space-around;
                  margin-bottom:  0.05rem;
                  span{
                    display: inline-block;
                    display: block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }
                  span:first-child{
                    width: 30%;
                  }
                }
                .detail{
                  color: #333;
                }
            }
        }
    }
}

#navh2 {
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
</style>
