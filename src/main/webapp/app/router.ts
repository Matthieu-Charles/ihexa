import { homeRoutes } from '@/home/application/HomeRouter';
import { invoicesRoutes } from '@/invoice/application/InvoicesRouter.ts';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [...homeRoutes(), ...invoicesRoutes()];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
