import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import Item from '../components/Item.vue'
import Users from '../components/Users.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/main',
    name: 'main',
    redirect: '/item',
    component: MainView,
    children: [
      {path: "/item", component: Item},
      {path: "/users", component: Users},
    ]
  },
 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
