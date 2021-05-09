import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tools',
        name: 'Tools',
        component: () => import('@/views/Tools.vue'),
        children: [
            {
                path: '/tools/:category/:name',
                name: 'ToolsDetail',
                component: () => import('@/views/ToolsDetail.vue')
            }
        ]
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }
];

export default routes;
