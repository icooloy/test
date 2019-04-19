<template>
	<div id="app">
		<router-view/>
	</div>
</template>
<style lang="scss">
#app{ 
	font-family: 'Avenir', Helvetica, Arial, sans-serif; 
	-webkit-font-smoothing: antialiased; 
	-moz-osx-font-smoothing: grayscale; 
	text-align: center; 
	color: #2c3e50;
	.box{
		max-width: 500px;
		margin:5% auto;
		padding: 2%;
		box-shadow: 3px 5px 8px;
		background-color: #eee;
		ul{
			list-style: none;
			margin:0 auto;
			margin-top: 5%;
			width: 100%;
			li{
				list-style: none;
				display: inline-block;
				padding: 5px 10px;
			}
		}
		.form{
			width: 50%;
			clear:both;
			margin: 5% auto;
			p{
				text-align: left;
				font-size: 10px;
				margin-top: 20px;
			}
			input, label{
				display: block;
				text-align: left;
				width: 100%;
				margin-top: 10%;
				padding: 2%;
				box-sizing: border-box;
			}
			input{
				margin-top: 2%;
			}
			input[type=submit] {
				margin-top: 15% !important;
				padding-left: 0px !important;
				padding-right: 0px !important;
				text-align: center;
			}
		}
		
	} 
}
</style>
