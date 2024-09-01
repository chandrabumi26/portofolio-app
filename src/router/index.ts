import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Landing from "@/views/LandingView.vue";
import About from "@/views/AboutView.vue";
import Work from "@/views/WorkView.vue";
import WorkDetail from "@/views/WorkDetailView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Landing,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/work",
    name: "work",
    component: Work,
  },
  {
    path: "/work/detail/:name",
    name: "workdetail",
    component: WorkDetail,
  },
  {
    path: "/work/detail/bspace/:name",
    name: "bspacedetail",
    component: WorkDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
