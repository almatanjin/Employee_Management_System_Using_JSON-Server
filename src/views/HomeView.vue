<template>
  <div class="dropdown">
    <a class="btn btn-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
      aria-expanded="false">
      <span style="color:skyblue">{{ name }} </span>
    </a>

    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <nav>
        <!-- <li><a class="dropdown-item" href="#"><router-link to="#"><span>{{name}} </span></router-link></a></li> -->

        <li><a class="dropdown-item" href="#"><router-link to='/add'>Add Employee</router-link></a></li>
        <li><a class="dropdown-item" href="#"><router-link to="/" @click="myfunction()">Logout</router-link></a></li>
      </nav>
    </ul>
  </div>
  <div class="home">
    <nav class="nav">
     
    </nav>
    <img class="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/fb1d57986087319.60bda861192ca.png" />

    <h3 class="pad">Employees</h3>
  </div>
  <table class="table table-dark table-striped w-75">
    <thead>
      <tr>
        <th>name</th>
        <th>Position</th>
        <th>Address</th>
        <th>Contact Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in employee" :key="item">
        <td>{{ item.name }}</td>
        <td>{{ item.position }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td><router-link :to="'/update/' + item.id"><button type="button" class="btn btn-light btn-sm">Update</button></router-link>
          <button type="button" class="btn btn-danger btn-sm"
          
          @click="deleteEmployee(item.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import router from '@/router';
import axios from 'axios';
// @ is an alias to /src

const name = ref('')
const employee = ref([])
// onMounted(()=>{
//   loadData()
// })
onMounted(async () => {
  const user = localStorage.getItem('user-info');
  console.log(user)
  name.value = JSON.parse(user).name

  if (!user) {
    alert('To access this page login first')
    router.push({ name: 'signUp' })
  }

  let result = await axios.get("http://localhost:3000/employee")
  employee.value = result.data




})
function myfunction() {
  localStorage.clear();
  router.push({ name: 'login' })
}

async function deleteEmployee(id) {
  let result = await axios.delete("http://localhost:3000/employee/" + id)
  if (result.status == 200) {

    loadData()

  }
}

async function loadData() {
  let user = localStorage.getItem('user-info');
  name.value = JSON.parse(user).name
  if (!user) {
    alert('To access this page login first')
    router.push({ name: 'signUp' })
  }

  let result = await axios.get("http://localhost:3000/employee")
  employee.value = result.data
}
</script>
<style>
table {

  margin-left: auto;
  margin-right: auto;
}

.pad {
  margin-top: 24px;
  margin-bottom: 24px;
}
</style>
