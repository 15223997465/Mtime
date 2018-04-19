<template lang="html">
  <div class="homes">
    <div class="homesnav">
      <p></p>
      <ul>
        <!-- <li class="focus">正在热映</li>
        <li>即将上映</li> -->
        <router-link to="/homes/nowplaying" tag ="li" activeClass="focus">正在热映</router-link>
        <router-link to="/homes/willcome" tag ="li" activeClass="focus">即将上映</router-link>

      </ul>
    </div>
    <homeSearch></homeSearch>
    <router-view></router-view>
  </div>
</template>

<script>
import homeSearch from "./common/homesearch";
export default {
  data(){
    return{

    }
  },
  components:{
    homeSearch,
  }
}
</script>

<style lang="scss" scoped>
.homesnav{
  height: 0.5rem;
  background-color:#1c2635;
  margin-top: -0.01rem;
  display: flex;
  align-items: center;
  ul{
    width: 70%;
    height: 80%;
    margin: 0 15%;
    background-color:#0d121a;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0.4rem;
    li{
      width: 50%;
      height: 100%;
      line-height: 0.4rem;
      font-size: 0.2rem;
      text-align: center;
      float: left;
      color: #1c2635;
      border-radius: 0.4rem;
      box-sizing: border-box;
      cursor: pointer;
    }
    .focus{
      background-color:#1c2635;
      color: #fff;
      border: 0.01rem solid #0d121a;
    }
  }
}
</style>
