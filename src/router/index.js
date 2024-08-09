import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import History from '../pages/History.vue';
import Culture from '../pages/Culture.vue';
import Tourism from '../pages/Tourism.vue';
import Economy from '../pages/Economy.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/history', component: History },
  { path: '/culture', component: Culture },
  { path: '/tourism', component: Tourism },
  { path: '/economy', component: Economy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
