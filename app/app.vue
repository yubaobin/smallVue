<script>
import Vue from 'vue'
import datetime from './components/datetime'
import {router} from './util/routeConfig'
import Vuex from 'vuex'

Vue.use(Vuex);
const YBB = 'ybb';
const moduleA = {
  state: {
    numA:1
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}
const moduleB = {
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {
    
  }
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    vuexMsg:'根节点的信息',
    sameName: '组件名和state的名字相同',
    count:0,
    name:'ybb',
    age:0
  },
  mutations: {
    increment (state,option){
      if(option.opr){
        state.count -= option.num;
      }else {
        state.count += option.num;
      }
    },
    [YBB] (state){
      console.log('ybb');
    },
    printName (state){
      state.name = state.name + "改变了";
    },
    printAge (state){
      state.age = state.age + "改变了";
    },
    add (state,option){
      state.age +=parseInt(option.num)
    },
    minus (state,option){
      state.age -=parseInt(option.num)
    }
  },
  getters: {
    addOne: (state) => {
      return state.count + 1;
    },
    mult: (state,getters) => {
      return getters.addOne * 3
    }
  },
  actions: {
    actionName (context){
      context.commit('printName')
    },
    oper ({commit,state},option){
      if(option.oper == '+'){
        commit('add',option)
      }else {
        commit('minus',option)
      }
    }
  }
})
var app = new Vue({
  el: '#app',
  store,
  data: {
    message: "create by ybb",
    arr:[1,2,3,4,5]
  },

  template:`
  		<div>
	  		<date :message="message" :arr="arr" ref="date1" @updateMsg="updateMsg"></date>
	  		<p>{{arr}}</p>
        <p>{{ybb}}</p>
  			<div>
        <router-link to="/">home</router-link>
        <router-link to="/father">Go to father</router-link>
        <router-link to="/active">Go to active</router-link>
        <router-link to="/anim">Go to anim</router-link>
        </div>
        <div>
        <router-link to="/directive">Go to directive</router-link>
        <router-link to="/mixin">Go to mixin</router-link>
        <router-link to="/vuex">Go to vuex</router-link>
        </div>
  			<router-view></router-view>
		</div>`,
  router,
  created: function(){
  	console.log("app.vue create");
    Vue.set(this.$store.state,'ybb',2)
  },
  updated: function(){
  	console.log("app-update",this.$data.message);
  },
  methods:{
    updateMsg:function(value){
      this.$store.state.ybb = 3
      this.message = `已经点击了${value}次`;
      this.$nextTick(function () {
        console.log(this.$data.message) // => '更新完成'
      });//立即更新dom
    }
  },
  computed:{
    ybb (){
      return this.$store.state.ybb;
    }
  }
})
</script>