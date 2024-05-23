import Vue from 'vue'
import VueRouter from 'vue-router'
import UploadVideo from "@/components/UploadVideo.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'UploadVideo',
        component: UploadVideo,
    }
]

const router = new VueRouter({
    routes
})

export default router
