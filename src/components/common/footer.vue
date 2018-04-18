<template lang="html">
  <footer>
    <div class="hea_news">
      <ul class="lilist">
        <router-link tag="li" to="/home" activeClass="active">首页</router-link>
        <router-link tag="li" to="/theater/291" activeClass="active">购票</router-link>
        <router-link tag="li" to="/find" activeClass="active">发现</router-link>
        <router-link tag="li" to="/login" activeClass="active">我的</router-link>
      </ul>
    </div>
    <div class="footlink">
      <ul class=" table_vh_c">
        <li class=""><a href="http://www.mtime.com/rdtopc"><span>PC版</span></a></li>
        <li class=""><a href="https://m.mtime.cn/#!/download/" id="downloadApp"><span>客户端下载</span></a></li>
        <li class=""><a href="https://m.mtime.cn/#!/reportError/"><span>意见反馈</span></a></li>
        <li class=""><a href="https://m.mtime.cn/#!/help/helpCenter/"><span>帮助中心</span></a></li>
      </ul>
    </div>
    <div class="copy">
      <p class="img"></p>
      <p><span>Copyright </span><span class="copytime">2006-2018</span> <span> Mtime.com Inc. All rights reserved.</span></p>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
    .hea_news {
        overflow: hidden;
        color: #0074c5;
        ul {
            display: flex;
            text-align: center;

            li {
                flex: 1;
                line-height: 3rem;
                font-size: 0.9375rem;
                height: 3rem;
            }
        }
    }
    .footlink {
        overflow: hidden;
        background-color: #f6f6f6;
        .table_vh_c {
            overflow: hidden;
            display: flex;
            width: 100%;
            li {
                display: block;
                width: 25%;
                text-align: center;
                line-height: 3rem;
                a {
                    color: #333;
                }
            }
        }
    }
    .copy {
        color: #cdcdcd;
        text-align: center;
        font-size: 0.8rem;
        background-color: #f6f6f6;

        .img {
            text-indent: -3943434px;
            background: url("../../../static/logo_mtime.png") no-repeat center center;
            background-size: auto 2rem;
            height: 1rem;
            color: #cdcdcd;
            text-align: center;
            padding-bottom: 0.5em;

        }
    }
  }
</style>
