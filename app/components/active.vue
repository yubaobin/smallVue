<template id="active">
	<div>
		动态组件
		<!-- <button @click="go('home')">home</button>
		<button @click="go('school')">school</button>
		<button @click="go('work')">work</button>
		<button @click="go('once')">once</button>
		<vue-drr :w='180' :h='180' :r='0' :rotatable='true' v-on:change="showchange">
		    I can be dragged anywhere
		</vue-drr>
		<keep-alive>
			<transition name="fade" mode="out-in">
				<component :is="active" :parent="message"></component>
			</transition name="fade">
		<keep-alive> -->
		<bottom-nav >
	      <item-nav @click="note" index="1"><p>笔记</p></item-nav>
	      <item-nav @click="person" index="2"><p>我的</p></item-nav>
	    </bottom-nav>
	</div>
</template>

<script>
import Vue from 'vue';
import childrenSlot from './childrenSlot'
import VueDRR from 'vue-drag-resize-rotate'

export default Vue.component('active',{
	data:function(){
		return {
			active:'home',
			message:'父'
		}
	},
	template:'#active',
	components:{
		home:{
			template:`<childrenSlot><p slot="header">动态组件</p></childrenSlot>`,
			activated:function(){
				console.log('activated');
			},
			deactivated:function(){
				console.log('deactivated')
			}
		},
		'vue-drr': VueDRR,
		school:{
			props:['parent'],
			data:function(){
				return {
					name:'school'
				}
			},
			template:`<div>
						{{name}}-
						{{parent}}
				      </div>`
		},
		work:{
			template:`<div>work</div>`
		},
		once: {
			template:`<div v-once><h1>v-once</h1></div>`
		}

	},
	methods:{
		go:function(url){
			console.log(url)
			this.active = url;
		},
		showchange: function (data) {
	      console.log("====",JSON.stringify(data))
	    },
	    note() {
	    	console.log('笔记')
	    },
	    person() {
	    	console.log('我的')
	    }
	}
})
</script>
<style>
.fade-enter-active {
  opacity: 1;
  transition: all .5s
}
.fade-leave {
  color: #EADABA;
}
.fade-enter {
  opacity: 0;
  transition: all .5s
}	
.fade-leave-active {
  opacity: 0;
  transition: all .5s
}	
</style>