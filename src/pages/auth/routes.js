
export default [
    {
        path: '/auth/login',
        component: () => import('./login.vue'),
        name: 'auth.login',
        meta: {
            title: '登录',
            auth: false,
        },
    },
]
