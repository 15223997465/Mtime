import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from "../components/home"
import HotComponent from "../components/nowplaying"
import ComingComponent from "../components/coming"
import HomemovieComponent from "../components/homemovie"
import NewsDetailComponent from "../components/newsdetail"
import HomesComponent from "../components/homes"
import TheaterComponent from "../components/theater"
import LoginComponent from "../components/login"
import RegisterComponent from "../components/register"
import FindComponent from "../components/find"
import NewsComponent from "../components/news"
import TrailerComponent from "../components/trailer"
import ToplistComponent from "../components/toplist"
import ReviewComponent from "../components/review"
import MovieComponent from "../components/movie"
import LazyRender from 'vue-lazy-render'
Vue.use(LazyRender)
Vue.use(Router)

const router = new Router({
  mode: "hash", //默认值是hash
  routes: [
    //主页
    {
      path: "/home",
      component: HomeComponent,
    },
    {
      path: "/homes",
      component: HomesComponent,
      children: [{
          path: "nowplaying",
          component: HotComponent
        },
        {
          path: "willcome",
          component: ComingComponent
        }
      ]
    },
    {
      path: "/homemovie/:id",
      component: HomemovieComponent
    },

    {
      path: "/movie",
      component: MovieComponent,
    },
    {
      path: "/theater/:id",
      component: TheaterComponent,
    },
    {
      path: "/login",
      component: LoginComponent
    },
    {
      path: "/register",
      component: RegisterComponent
    },

    {
      path: "/theater/:id",
      component: TheaterComponent,
    },
    {
      path: "/login",
      component: LoginComponent
    },
    {
      path: "/register",
      component: RegisterComponent
    },
    {
      path: "/find/news/newsdetail/:id",
      component: NewsDetailComponent
    },
    {
      path: "/find",
      component: FindComponent,
      children: [{
          path: "news",
          component: NewsComponent,
        },
        {
          path: "trailer",
          component: TrailerComponent
        },
        {
          path: "toplist",
          component: ToplistComponent
        },
        {
          path: "review",
          component: ReviewComponent
        },
        {
          path: '',
          component: NewsComponent
        }
      ]
    },


    {
      path: "*",
      redirect: "/home"
    }

  ]
});
export default router;