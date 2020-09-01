import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: Msite,
        meta: {
            showFooter: true
        }
    }, {
        path: '/msite',
        component: Msite,
        meta: {
            showFooter: true
        }
    }]
})