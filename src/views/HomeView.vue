<template>
  <div class="home">
 <h1>Home page</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import router from '@/router';
// @ is an alias to /src
onMounted(()=>{
        let user=localStorage.getItem('user-info');
        if(!user){
            alert('You are allready Loggeed in')
            router.push({name:'signUp'})
        }
    })
</script>
