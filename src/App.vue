<template>
<Calculate />
</template>

<script>
import Calculate from './components/calculate.vue';

export default {
	name: 'App',
	components:
	{
		Calculate
	}
}
</script>

<style>
#app
{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 0 auto;
}
*{box-sizing: border-box;}
body
{
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: rgb(2,0,36);
	background: linear-gradient(166deg, rgba(2,0,36,1) 0%, rgba(127,14,181,1) 52%, rgba(0,212,255,1) 100%);
}
</style>
