<template>
<div class="willcome">
  <div class="willcomemovie">
    <h3>即将上映<span>（40）</span></h3>
    <div class="mouth">
      <p class="m">4月</p>
      <ul>
        <li>
          <p class="time">20</p>
          <div class="info">
            <img src="" alt="">
            <div class="movieinfo">
              <h3>1111</h3>
              <p class="want">222</p>
              <p class="director">111</p>
              <p class="btn">
                <span class="pre-sale">超前预售</span>
                <span class="trailer">预告片</span>
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
export default {
  data() {
    return {

    }
  },

}
</script>

<style lang="scss" scoped>
.willcome {
    box-sizing: border-box;
    padding: 0.14rem 0.17rem 0.17rem;
    .willcomemovie {
        box-sizing: border-box;
        padding: 0.17rem 0;
        h3 {
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
            }
            ul {
                li {
                    position: relative;
                    .time {
                        line-height: 0.2rem;
                        font-size: 0.18rem;
                        color: #999;
                        position: absolute;
                    }
                    .info {
                        display: flex;
                        justify-content: space-around;
                        box-sizing: border-box;
                        margin-left: 0.3rem;
                        img {
                            width: 20%;
                            height: 1.15rem;
                        }
                        .movieinfo {

                            width: 75%;
                            h3 {
                                font-size: 0.24rem;
                                line-height: 0.2rem;
                            }
                            .director,
                            .want {
                                font-size: 0.18rem;
                                line-height: 0.24rem;
                            }
                            .btn {
                                font-size: 0.2rem;
                                margin-top: 0.1rem;
                                display:flex;
                                justify-content: space-around;
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
                                }
                                .trailer{
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
</style>
