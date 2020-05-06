import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);


const routes = [
  {
    path: '/',
    component: () => import("../home"),
  },
  {
    path: '/select',
    component: () => import("../select"),
  }
]

export default new Router({
  routes
});
