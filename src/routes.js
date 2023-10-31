import Home from "./views/HomePage.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home },
  { path: "/:path(.*)", component: NotFound, meta: { title: "404" } },
];
