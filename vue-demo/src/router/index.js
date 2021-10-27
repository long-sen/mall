import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "",
    name: 'aaa',
    redirect: '/home'
},
{
    path: "/home",
    name: 'home',
    component: () => import("../views/home/Home.vue"),
},
{
    path: "/category",
    name:'category',
    component: () => import("../views/category/Category.vue"),
},
{
    path: "/cart",
    name:'cart',
    component: () => import("../views/cart/Cart.vue"),
},
{
    path: "/profile",
    name:'profile',
    component: () => import("../views/profile/Profile.vue"),
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
