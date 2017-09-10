import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import { routes } from './routes'
Vue.use(VueRouter)
Vue.use(axios, VueAxios)

axios.defaults.baseURL = 'http://engine-dev/api';

new Vue({
    el: '#app',
    render: h => h(App),
    router: new VueRouter({
        routes: routes
    })
})