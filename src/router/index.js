import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () => import( '../views/Index.vue'),
        children: [
            {
                path: '/index/',
                name: 'Home',
                component: () => import( '../views/Home.vue')
            },
            {
                path: '/index/task',
                name: 'Task',
                component: () => import( '../views/Task.vue')
            },
            {
                path: '/index/taskchild',
                name: 'TaskChild',
                component: () => import( '../views/TaskChild.vue')
            },
            {
                path: '/index/chart',
                name: 'Chart',
                component: () => import( '../views/Chart.vue')
            }
            ]
    },

]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})


export default router
