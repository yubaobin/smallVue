import Vue from 'vue'
import VueRouter from 'vue-router'
import father from '../components/father'
import active from '../components/active'
import anim from '../components/anim'
import directive from '../components/myDirective'
import mixin from '../components/mixins'
Vue.use(VueRouter);//使用路由
const routes = [
  { 
  	path: '/father', 
  	component: father 
  },{
  	path: '/active',
  	component:active
  },{
  	path: "/anim",
  	component:anim
  },{
    path: "/directive",
    component:directive
  },{
    path: "/mixin",
    component:mixin
  }
]
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export {router}