
import {createRouter, createWebHistory} from 'vue-router'
import routes from './routes'


const router = createRouter({
    history: createWebHistory(),
    mode:'history',
    base: process.env.NODE_EMV === "production" ? "/ldk/" : "/",
    routes
})

export default router
