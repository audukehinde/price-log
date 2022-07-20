import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import ItemsDetail from '../views/ItemsDetail.vue'
import UsersRequest from '../views/UsersRequest.vue'
import Item from '../components/Item.vue'
import Users from '../components/Users.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: LoginView
  // },

  {
    path: '/',
    name: 'Main',
    redirect: '/item',
    component: MainView,
    children: [
      {path: "/item", component: Item},
      {path: "/users", component: Users},
    ]
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
