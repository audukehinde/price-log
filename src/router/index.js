import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import ItemsDetail from '../views/ItemsDetail.vue'
import UsersRequest from '../components/UsersRequest.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: LoginView
  // },

  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/ItemsDetail',
    name: 'ItemsDetail',
    component: ItemsDetail
  },
 
  {
    path: '/UsersRequest',
    name: 'UsersRequest',
    component: UsersRequest
  },
 

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
