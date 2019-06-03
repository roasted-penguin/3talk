import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import afterlogin from '../components/afterlogin'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path:'/:id',
    	name : 'afterlogin',
    	component :  afterlogin
    }
  ]
})
