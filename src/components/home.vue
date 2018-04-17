<template>
<div class="home">
  <div class="movie_search">
    <div class="hea_search">
      <div class="table_v_c">
        <div class="cityshow"><b>重庆</b><i class="i_block i_city"></i></div>
        <p class="input td"><a href="#!/search/"><span>影片/影院/影人，任你搜</span></a></p>
      </div>
    </div>
  </div>
  <div class="hotindex">
    <h2>
      <a href="/hot">
        <i class="i_tnext"></i>
        <b>正在热映（46部）</b>
      </a>
    </h2>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {

    }
  },
  mounted() {
    axios.get("/Service/callback.mi/Showtime/LocationMovies.api?locationId=291&t=201841717221065862")
    .then(res=>{
      console.log(res.data);
      //this.datalist= res.data.data.films
    })
  }

}
</script>

<style lang="scss" scoped>
.home {
    box-sizing: border-box;

    //search
    .hea_search {
        background: #f6f6f6;
        border-bottom: 1px solid #d8d8d8;
        position: relative;
        height: 100%;
        z-index: 3;
        .table_v_c {
            -webkit-box-align: center;
            width: 100%;
            display: -webkit-box;
            .cityshow {
                margin: 0 1.5rem;
                height: 3.5rem;
                line-height: 3.5rem;
                b {
                    font-size: 1.6em;
                    font-weight: normal;
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: -0.25rem;
                }
                .i_city {
                    width: 0.9em;
                    height: 0.5em;
                    margin-left: 0.5em;
                    margin-top: 0.3em;
                    background: url("http://static1.mtime.cn/html5/20180208104315/images/2014/i_city.png") no-repeat;
                    background-size: cover;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .input {
                margin-left: 0;
                font-size: 1.4rem;
                height: 2.4rem;
                line-height: 1.2rem;
                padding: 0 1.8rem 0 2rem;
                border-radius: 0.5rem;
                background: #fff url("http://static1.mtime.cn/html5/20180208104315/images/2014/search_ico_01.png") no-repeat 0.5em center;
                background-size: 1.3rem 1.3rem;
                position: relative;
                z-index: 0;
                span {
                    display: inline-block;
                    vertical-align: middle;
                    color: #777;
                    line-height: 2.4rem;
                    font-size: 1rem;
                }
            }
        }
    }

    //hotindex
    .hotindex {
        box-sizing: border-box;
        padding: 0.25rem 0.75rem 0.75rem;
        position: relative;
        zoom: 1;
        h2{


        a {
            display: block;
            line-height: 2rem;
            position: relative;
            b {
                font-size: 1.4rem;
                color: #333;
            }
            .i_tnext {
                width: 1.4rem;
                height: 0.8rem;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -0.4rem;
                overflow: hidden;
                line-height: 11rem;
                background: #fff url("http://static1.mtime.cn/html5/20180208104315/images/2014/i-tmore.png") no-repeat center center;
                background-size: auto 0.8rem;
                -webkit-transform: rotate(-90deg);
            }
        }
      }
    }
}
</style>
