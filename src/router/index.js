import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import UploadItem from "../views/UploadItem.vue";
import UsersRequest from "../components/UsersRequest.vue";
import CreateAdmin from "../components/CreateAdmin.vue";
import Item from "../components/Item.vue";
import Users from "../components/Users.vue";
import Description from "../views/Description.vue";
import ForgetPassword from "../views/ForgetPassword";
import ResetPassword from "../views/ResetPassword";
import UserHomePage from "../views/UserHomePage";
import AddCategory from "../components/AddCategory.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/main",
    name: "main",
    redirect: "/item",
    component: MainView,
    children: [
      { path: "/item", component: Item },
      { path: "/users", component: Users },
      { path: "/usersRequest", component: UsersRequest },
      { path: "/createAdmin", component: CreateAdmin },
      { path: "/addcategory", component: AddCategory },
    ],
  },

  {
    path: "/uploadItem",
    component: UploadItem,
  },

  {
    path: "/usersrequest",
    name: "UsersRequest",
    component: UsersRequest,
  },
  {
    path: "/description/:itemId",
    component: Description,
  },
  {
    path: "/forgetpassword",
    component: ForgetPassword,
  },
  {
    path: "/resetpassword",
    component: ResetPassword,
  },
  {
    path: "/userhomepage",
    component: UserHomePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
