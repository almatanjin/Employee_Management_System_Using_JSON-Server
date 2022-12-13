<template>
    <nav class="navbar navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><router-link to="/home"><button type="button" class="btn btn-dark">Back</button></router-link></a>
  </div>
</nav>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />
    
    <h3 class="pad">Update Employee</h3>
    <form action="" class="add">
        <input type="text" placeholder="Enter Name" v-model="employee.name" />
        
        <input type="text" placeholder="Enter Position" v-model="employee.position" />
        <input type="text" placeholder="Enter Adddress" v-model="employee.address" />
        <input type="text" placeholder="Enter Contact Number" v-model="employee.contact" />
        <button @click.prevent="updateEmployee()">Save</button>
    </form>

</template>
    
<script>
// import { onMounted } from 'vue';
// import router from '@/router';
// import { ref } from 'vue';



// const name = ref('')
// const position = ref('')
// const address = ref('')
// const contact = ref('')


// onMounted(() => {
//     let user = localStorage.getItem('user-info');
//     if (!user) {
//         alert('To access this page login first')
//         router.push({ name: 'signUp' })
//     }
//     console.log(this.$route.params.id)
// })

import axios from 'axios';
export default {
    name: "updateEmployee",



    data() {
        return {
            employee: {
                name: '',
                position: '',
                address: '',
                contact: ''
            }
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
    if (!user) {
        alert('To access this page login first')
        this.$router.push({ name: 'signUp' })
    }
    const result=await axios.get("http://localhost:3000/employee/"+this.$route.params.id)
    this.employee=result.data
    

    },
    methods:{
        async updateEmployee(){
        let result= await axios.put("http://localhost:3000/employee/"+this.$route.params.id,{
        name:this.employee.name,
        position:this.employee.position,
        address:this.employee.address,
        contact:this.employee.contact
    });
    if(result.status==200){
        
         this.$router.push({name:'home'})
    }
            
        }
    }

}
</script>
<style>
.pad{
    margin-top: 24px;
    margin-bottom: 24px;
}
</style>