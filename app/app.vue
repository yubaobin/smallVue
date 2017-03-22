<script>
import Vue from 'vue'
import datetime from './components/datetime'
import {router} from './util/routeConfig'
import Vuex from 'vuex'

Vue.use(Vuex);
const YBB = 'ybb';
console.log("========",process.env)
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
    numB:2
  },
  mutations: {
    bMutations (state,option) {
      console.log('bMutations');
    }
  },
  actions: {
    bAction(context) {
      console.log("bAction",context.rootState.vuexMsg);
    }
  },
  getters: {
    getRootGetters: (state,getters,rootState) => {
      console.log("rootGetters",rootState.vuexMsg);
      return rootState.vuexMsg;
    },
    ['todos/DONE_COUNT']:(state) => 'todos/DONE_COUNT'
  }
}

const myPlus = store => {
  store.subscribe((mutation, state) => {// 每次 mutation 之后调用
    console.log("插件",mutation)
  })
}
const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  },
  plugins:[myPlus],
  state: {
    vuexMsg:'根节点的信息',
    sameName: '组件名和state的名字相同',
    count:0,
    name:'ybb',
    age:0,
    numA: "numA"
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
      let age = state.age;
      if(Object.getPrototypeOf(state.age) !== Number.prototype){
        state.age = parseInt(age.substring(0,1)); 
      }
      state.age +=parseInt(option.num)
    },
    minus (state,option){
      let age = state.age;
      if(Object.getPrototypeOf(state.age) !== Number.prototype){
        state.age = parseInt(age.substring(0,1)); 
      }
      state.age -=parseInt(option.num);
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
        <router-link to="/highlight">Go to highlight</router-link>
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