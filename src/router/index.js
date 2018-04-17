import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from "../components/home"
import HotComponent from "../components/hot"
import ComingComponent from "../components/coming"
import MovieComponent from "../components/movie"
import TheaterComponent from "../components/theater"
import LoginComponent from "../components/login"
import RegisterComponent from "../components/register"
import FindComponent from "../components/find"
import NewsComponent from "../components/news"
import TrailerComponent from "../components/trailer"
import ToplistComponent from "../components/toplist"
import ReviewComponent from "../components/review"

Vue.use(Router)

const router = new Router({
	mode: "hash", //默认值是hash
	routes: [
		//主页
		{
			path: "/home",
			component: HomeComponent,
			children: [{
					path: "hot",
					component: HotComponent
				},
				{
					path: "coming",
					component: ComingComponent
				}
			]
		},

		//购票&&登录注册
		{
			path: "/movie/:id",
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

		//发现
		{
			path: "/find",
			component: FindComponent,
			chilren: [{
					path: "news",
					component: NewsComponent
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
				}
			]
		},

		//		{
		//			path: "*",
		//			redirect: "/home"
		//		}
	]
})
export default router;