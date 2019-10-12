import Vue from 'vue'
import VueRouter from 'vue-router'

import Tabbar from '../components/tabbar'
import List from '../components/list'
import Login from '../components/login'

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [{
    path: '/',
    name: 'tabbar',
    component: Tabbar,
    children: [{
      name: 'list',
      path: '/',
      component: List
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    }
    ]
  }]
})

export default router
