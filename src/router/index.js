import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../components/SignUp.vue'
import LoginVue from '../components/LoginVue'
import AddEmployee from '../components/AddEmployee.vue'
import updateEmployee from '../components/updateEmployee.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signUp',
    name:'signUp',
    component:SignUp
  },
  {
    path:'/',
    name:'login',
    component:LoginVue
  },
  {
    path:'/add',
    name:'addEmployee',
    component:AddEmployee
  },
  {
    path:'/update/:id',
    name:'updateEmployee',
    component:updateEmployee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
