import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Details from "../views/movieDetails";
import Watch from "../views/watchLater";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/details/:id",
    name: "details",
    component: Details
  },
  {
    path: "/watch",
    name: "watch",
    component: Watch
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
