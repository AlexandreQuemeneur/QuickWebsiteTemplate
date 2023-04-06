import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: 'Home', 
            component: HomeView 
        },
        {
            path: '/about', 
            name: 'About', 
            component:() => import('../views/AboutView.vue')
        },
        {
            path: '/theme', 
            name: 'theme', 
            component:() => import('../views/ThemeView.vue')
        },
        {
            path: '/dashboard', 
            name: 'dashboard', 
            component:() => import('../views/DashboardView.vue')
        },
    ] 
})

export default router;