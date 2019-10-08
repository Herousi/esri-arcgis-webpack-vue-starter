import Auth from '@/pages/auth/routes'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@pages/Index.vue')
  },
  ...Auth
]

export default routes
