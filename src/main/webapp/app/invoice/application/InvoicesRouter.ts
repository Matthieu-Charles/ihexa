import InvoicePage from '@/invoice/infrastructure/primary/InvoicePage.vue';
import type { RouteRecordRaw } from 'vue-router';

export const invoicesRoutes = (): RouteRecordRaw[] => [
  {
    path: '/invoices/:id',
    name: 'Invoice',
    component: InvoicePage,
    props: true,
  },
];
