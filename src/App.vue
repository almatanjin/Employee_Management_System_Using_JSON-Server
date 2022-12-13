<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link>| -->
    <!-- <router-link to="/signUp" v-if="home=true">Sign Up</router-link>|
    <router-link to="/login" v-if="home=true">Login</router-link> -->
  </nav>
  <router-view/>
</template>
<script setup>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.logo {
  width: 100px;
}

.register input, .add input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid;
  display: block;
}

.register button, .add button {
  width: 120px;
  padding: 15px;
  color: aliceblue;
  background-color: black;


}
</style>
