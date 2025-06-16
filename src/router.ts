import { createRouter, createWebHistory } from "vue-router";

import About from "./components/About.vue";
import Dashboard from "./components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Dashboard },
    { path: "/about", component: About },
  ],
});

export default router;
