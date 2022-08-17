import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }, {
        path: '/jamaica',
        name: 'Jamajamaicaica',
        component: () => import('@/views/Jamaica.vue')
    }, {
        path: '/brazil',
        name: 'brazil',
        component: () => import('@/views/Brazil.vue')
    }, {
        path: '/hawaii',
        name: 'hawaii',
        component: () => import('@/views/Hawaii.vue')
    }, {
        path: '/panama',
        name: 'panama',
        component: () => import('@/views/Panama.vue')
    }, {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: route => ({...route.params, id: route.params.id}),
        beforeEnter(to, from) {
            const exist = sourceData.destinations.find((item) => item.id === parseInt(to.params.id))
            if(!exist) return {
                name: 'notFound',
                hash: to.hash,
                query: to.query
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({...route.params, id: parseInt(route.params.id)})
            }
        ]
    }, {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import('@/views/NotFound.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'vueRouter4-activeLink'
    scrollBehavior(to, from, savePosition) {
        return savePosition || new Promise(resolve => {
            setTimeout(resolve( { top: 0, behavior: 'smooth' } ), 300)
        })
    }
})
export default router