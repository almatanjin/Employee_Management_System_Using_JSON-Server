<template>

    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    <div class="login">
        <h3>Login</h3>
        
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button >Login</button>
        <router-link to="/signUp">SignUp</router-link>
    </div>
    

</template>

<script setup>


</script>

<style>
.logo {
    width: 150px;
}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    display: block;
}

.login button {
    width: 120px;
    padding: 15px;
    color: aliceblue;
    background-color: black;


}
</style>
