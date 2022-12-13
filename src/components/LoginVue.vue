<template>

    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    <div class="login">
        <h3>Login</h3>
        
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button @click="login()" >Login</button>
        <router-link to="/signUp">SignUp</router-link>
    </div>
    

</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';
import { onMounted } from 'vue';

const email = ref('')
const password = ref('')

async function login(){

 
    let result = await axios.get(
        `http://localhost:3000/user?email=${email.value}&password=${password.value}`
    )
    if(result.status==200 && result.data.length>0){
        alert("Logged In")
        localStorage.setItem("user-info",JSON.stringify(result.data[0]))
         router.push({name:'home'})
    }
    else
    {
        alert("Email and password doesn't match")
    }
    
}
    onMounted(()=>{
        
        let user=localStorage.getItem('user-info');
        if(user){
            alert('You are allready Logged in')
            router.push({name:'home'})
        }
    })




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
