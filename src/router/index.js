import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from '@/pages/Index';
import Detail from '@/pages/Detail';
import List from '@/pages/List';
import Search from '@/pages/Search';
import City from '@/pages/City';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/detai',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/city',
    name: 'City',
    component: City,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
