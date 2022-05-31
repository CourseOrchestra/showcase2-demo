import Vue from "vue";
import VueRouter from "vue-router";
import WelcomePage from "../components/WelcomePage";
import LogoCursPage from "../components/LogoCursPage";
import LogoPlatformPage from "../components/LogoPlatformPage";
import NavigatorPage from "../components/NavigatorPage";
import GridPage from "../components/GridPage";
import UrlStatePage from "../components/UrlStatePage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: WelcomePage,
  },
  {
    path: "/logocurs",
    name: "logocurs",
    component: LogoCursPage,
  },
  {
    path: "/logoplatform",
    name: "logoplatform",
    component: LogoPlatformPage,
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
    component: UrlStatePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
