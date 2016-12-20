<script>
import Vue from 'vue'
import datetime from './components/datetime'
import {router} from './util/routeConfig'

var app = new Vue({
  el: '#app',
  data: {
    message: "create by ybb",
    arr:[1,2,3,4,5]
  },
  template:`
  		<div>
	  		<date :message="message" :arr="arr" ref="date1" @updateMsg="updateMsg"></date>
	  		<p>{{arr}}</p>
  			<div>
        <router-link to="/">home</router-link>
        <router-link to="/father">Go to father</router-link>
        <router-link to="/active">Go to active</router-link>
        <router-link to="/anim">Go to anim</router-link>
        </div>
        <div>
        <router-link to="/directive">Go to directive</router-link>
        <router-link to="/mixin">Go to mixin</router-link>
        </div>
  			<router-view></router-view>
		</div>`,
  router,
  created: function(){
  	console.log("app.vue create");
  },
  updated: function(){
  	console.log("app-update")
  },
  methods:{
    updateMsg:function(value){
      this.message = `已经点击了${value}次`;
      this.$nextTick(function () {
        console.log(this.$data.message) // => '更新完成'
      })
    }
  }
})
</script>