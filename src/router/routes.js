const routes = [
    {
        name: 'index',
        path: '/index',
        component: () => import('../components/LaborText.vue')
    },
    {
        name: 'setting',
        path: '/setting',
        component: () => import('../components/SubScripation.vue')
    },
    {
        path:'',
        component: () => import('../components/LaborText.vue')
    },
    {
        path:'/ldk/index.html',
        component: () => import('../components/LaborText.vue')
    }
    ,
    {
        path:'/ldk/',
        component: () => import('../components/LaborText.vue')
    }
    ,
    {
        path: '/ldk/setting',
        component: () => import('../components/SubScripation.vue')
    }
];

export default routes
