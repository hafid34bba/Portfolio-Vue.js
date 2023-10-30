import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ProjectView from "../views/ProjectView.vue"
import GalleryView from "../views/GalleryView.vue"
import ContactView from "../views/ContactView.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component : AboutView
  },
  {
    path: "/Protfolio",
    name: "Potfolio",
    component : PortfolioView
  },
  {
    path: "/Project",
    name: "Project",
    component : ProjectView
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component : GalleryView
  },
  {
    path: "/Contact",
    name: "Contact",
    component : ContactView
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
