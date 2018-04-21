<template>
	<div>
		<h2>{{moviename}}</h2>
		<p>{{movietime}}-{{movietype}}</p>
	</div>
</template>

<script>
	export default{
		props:["moviename","movietime","movietype"]
	}
</script>

<style type="text/css" lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
div{
	padding: 0.08rem 0 0.02rem 0;
	text-align: center;
	h2{
		font-size: 0.19rem;
		color: #333333;
	}
	p{
		color: #777777;
		line-height: 0.3rem;
		font-size: 0.15rem;
	}
}
</style>