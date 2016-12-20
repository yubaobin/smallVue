<template id="active">
	<div>
		动态组件
		<button @click="go('home')">home</button>
		<button @click="go('school')">school</button>
		<button @click="go('work')">work</button>
		<button @click="go('once')">once</button>
		<keep-alive>
			<transition name="fade" mode="out-in">
				<component :is="active" :parent="message"></component>
			</transition name="fade">
		<keep-alive>
	</div>
</template>

<script>
import Vue from 'vue';
import childrenSlot from './childrenSlot'

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