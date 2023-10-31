import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  let title = "chris d brown";
  if (to.meta.title) {
    title = `${to.meta.title} | chris d brown`;
  }
  document.title = title;
});

app.use(router);
app.mount("#app");
