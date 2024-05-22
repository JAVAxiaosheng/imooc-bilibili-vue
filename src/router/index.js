import Vue from 'vue'
import VueRouter from 'vue-router'
import Empty from "@/components/Empty.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Empty',
        component: Empty,
    }
]

const router = new VueRouter({
    routes
})

export default router
