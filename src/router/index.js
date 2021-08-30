import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Posts from "../views/posts/Posts.vue";
import CreatePosts from "../views/posts/CreatePosts.vue";
import DetailPosts from "../views/posts/Detail.vue";
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/create",
    name: "CreatePosts",
    component: CreatePosts,
  },
  {
    path: "/info",
    name: "DetailPosts",
    component: DetailPosts,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
