import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cm',
      name: 'about',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/rg',
      name: 'region',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Regions.vue')
    }
  ]
});
