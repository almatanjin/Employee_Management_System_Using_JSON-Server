<template>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />

    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name" />
        <input type="text" placeholder="Enter Email" v-model="email" />
        <input type="password" placeholder="Enter Password" v-model="password" />
        <button @click="signUp()">Sign Up</button>
    </div>
    <router-link to="/login">Login</router-link>
</template>

<script setup>


import { ref } from 'vue';
import  axios  from 'axios';
import router from '@/router';
// import { onMounted } from 'vue';

const name = ref('')
const email = ref('')
const password = ref('')

async function signUp() {
    
    

    console.log(name.value)
    let result= await axios.post("http://localhost:3000/user",{
        name:name.value,
        email:email.value,
        password:password.value
    });
    console.log(result)
    
    
    if(result.status==201){
        alert("Sign Up Done")
    }
    localStorage.setItem("user-info",JSON.stringify(result.data))
    router.push({name:'home'})
        
    }
 
    // onMounted(()=>{
        
    //     let user=localStorage.getItem('user-info');
    //     if(user){
    //         alert('You are allready Logged in')
    //         router.push({name:'home'})
    //     }
    // })


</script>
<style>
.logo {
    width: 150px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
    display: block;
}

.register button {
    width: 120px;
    padding: 15px;
    color: aliceblue;
    background-color: black;


}
</style>