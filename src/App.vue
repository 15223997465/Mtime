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
			myfooter,
		}
	}
</script>

<style lang="scss">
	html,
	body,
	li,
	p,
	ul,
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 100px;
	}
	body {
		width: 100%;
		height: 100%;
	}
	li {
		list-style: none;
	}
	
	a {
		text-decoration: none;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		height: 100%;
		width: 100%;
	}
</style>