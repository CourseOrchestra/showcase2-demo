import Vue from "vue";
import VueRouter from "vue-router";
import PlatformEmblem from "../components/PlatformEmblem";
import NavigatorPage from "../components/NavigatorPage";
import GridPage from "../components/GridPage";
import UrlState from "../components/UrlState";

Vue.use(VueRouter);

const routes = [
  {
    path: "/emblem",
    name: "emblem",
    component: PlatformEmblem,
  },
  {
    path: "/navigator",
    name: "navigator",
    component: NavigatorPage,
  },
  {
    path: "/grid",
    name: "grid",
    component: GridPage,
  },
  {
    path: "/urlstate",
    name: "urlstate",
    component: UrlState,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
