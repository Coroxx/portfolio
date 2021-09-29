import {
  createRouter,
  createWebHistory
} from "vue-router";

import Home from "@/views/Home.vue";

const routes = [{
  path: "/",
  name: "Home",
  component: Home,
  meta: {
    title: 'Corox'
  }
}];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;