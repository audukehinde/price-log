import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import UploadItem from "../views/UploadItem.vue";
import UsersRequest from "../components/UsersRequest.vue";
import PriceVerification from "../components/PriceVerification.vue";
import Item from "../components/Item.vue";
import Users from "../components/Users.vue";
import Description from "../views/Description.vue";
import ForgetPassword from "../views/ForgetPassword";
import ResetPassword from "../views/ResetPassword";
import UserHomePage from "../views/UserHomePage";
import AddCategory from "../components/AddCategory.vue";
import PriceReview from "../components/PriceReview.vue";
import Nav from "../components/Nav.vue";

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
      { path: "/priceverification.vue", component: PriceVerification },
      { path: "/addcategory", component: AddCategory },
      { path: "/nav", component: Nav },
      
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
  
  { path: "/pricereview", 
    component: PriceReview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
