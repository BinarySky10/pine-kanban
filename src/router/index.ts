import { createWebHistory, createRouter } from "vue-router";
import { Router, RouteRecordRaw } from 'vue-router'
import Layout from '@/Layout/Index.vue'
import kanban from '@/views/kanban/kanban.vue'
const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        path: 'kanban',
        component: kanban,
      }
    ]
  },
];

const router:Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


