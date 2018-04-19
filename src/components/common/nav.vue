<template lang="html">
  <div class="hea_news">
    <ul class="lilist">
      <router-link tag="li" to="/home"><img src="../../../static/logo_mtime.png"/></router-link>
      <router-link tag="li" to="/home" activeClass="active">首页</router-link>
      <router-link tag="li" to="/movie" activeClass="active">购票</router-link>
      <router-link tag="li" to="/find" activeClass="active">发现</router-link>
      <router-link tag="li" to="/login"><i class="iconfont icon-accountfilling"></i></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.hea_news{
  overflow: hidden;
  background-color:#1c2635;
  color:#8d9095;
  ul{
    display: flex;
    text-align: center;

    li{
      flex: 1;
      line-height: .5rem;
      font-size: 0.2rem;
      height: 0.5rem;
      img{
        width: 0.6rem;
        height: 0.2rem;
        vertical-align: middle;
        display:inline-block;
      }
    }
    i{
      flex: 1;
      color: white;
      line-height: 0.5rem;

    }
    .active{
      color:white;
    }
  }
}
</style>
