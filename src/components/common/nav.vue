<template lang="html">
  <div class="hea_news">
    <ul class="lilist">
      <router-link tag="li" to="/home"><img src="../../../static/logo_mtime.png"/></router-link>
      <router-link tag="li" to="/home" activeClass="active">首页</router-link>
      <router-link tag="li" to="/theater/291" activeClass="active">购票</router-link>
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
      line-height: 3.21875rem;
      font-size: .9375rem;
      height: 3.21875rem;
      img{
        width: 4.90625rem;
        height: 1.5625rem;
        vertical-align: middle;
        display:inline-block;
      }
    }
    i{
      flex: 1;
      color: white;
      line-height: 3.21875rem;

    }
    .active{
      color:white;
    }
  }
}
</style>
