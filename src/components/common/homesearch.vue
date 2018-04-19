<template lang="html">
  <div class="movie_search">
    <div class="hea_search">
      <div class="table_v_c">
        <div class="cityshow"><b>重庆</b><i class="i_block i_city"></i></div>
        <p class="input td">
          <a href="#!/search/"><span>影片/影院/影人，任你搜</span></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
            margin: 0 0.24rem;
            height: 0.56rem;
            line-height: 0.56rem;
            b {
                font-size: 0.26rem;
                font-weight: normal;
                display: inline-block;
                vertical-align: middle;
                float: left;
            }
            .i_city {
                width: 0.14rem;
                height: 0.08rem;
                margin-left: 0.08rem;
                margin-top: -0.15rem;
                background: url("http://static1.mtime.cn/html5/20180208104315/images/2014/i_city.png") no-repeat;
                background-size: cover;
                display: inline-block;
                vertical-align: middle;
            }
        }
        .input {
            margin-left: 0;
            font-size: 0.22rem;
            height: 0.38rem;
            line-height: 0.19rem;
            padding: 0 0.28rem 0 0.32rem;
            border-radius: 0.08rem;
            background: #fff url("http://static1.mtime.cn/html5/20180208104315/images/2014/search_ico_01.png") no-repeat 0.5em center;
            background-size: 0.2rem 0.2rem;
            position: relative;
            z-index: 0;
            span {
                display: inline-block;
                vertical-align: middle;
                color: #777;
                line-height: 0.38rem;
                font-size: 0.16rem;
            }
        }
    }
}
</style>
