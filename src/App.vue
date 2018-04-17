<template>
<div id="app">
  <mynav></mynav>
  <section>
    <router-view></router-view>
  </section>
  <myfooter></myfooter>
</div>
</template>

<script>
import mynav from "./components/common/nav"
import myfooter from "./components/common/footer"
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    mynav,
    myfooter
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
body,
html {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background: #fff;
}

li {
    list-style: none;
}
a {
    text-decoration: none;
}
</style>
