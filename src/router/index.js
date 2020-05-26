import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import( '../views/Home.vue')
    },
    {
        path: '/task',
        name: 'Task',
        component: () => import( '../views/Task.vue')
    },
    {
        path: '/taskchild',
        name: 'TaskChild',
        component: () => import( '../views/TaskChild.vue')
    },
    {
        path: '/chart',
        name: 'Chart',
        component: () => import( '../views/Chart.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
