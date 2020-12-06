<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/market">Market</router-link> |
			<router-link to="/profile">Profile</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 0 20%;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

input {
	font-family: "Roboto", sans-serif;
	color: #333;
	margin: 20px 10px;
	padding: 10px;
	border-radius: 0.2rem;
	border-color: #9f9;
	border: 1px solid #006400;
	background-color: white;
	width: 100px;
	transition: all 0.3s;
}

button {
	display: inline-block;
	padding: 10px;
	border: 0.1em solid #444;
	margin: 0 0.3em 0.3em 0;
	border-radius: 0.12em;
	box-sizing: border-box;
	text-decoration: none;
	font-family: "Roboto", sans-serif;
	font-weight: 300;
	color: #444;
	text-align: center;
	background-color: white;
	transition: all 0.2s;
}

button:hover {
	color: #fff;
	background-color: #444;
}
</style>
