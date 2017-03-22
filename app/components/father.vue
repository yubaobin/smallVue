<template id="model">
	<div class="red" >
		{{message}}
		<children-model :items="items" @father="fatherMethod" v-model="message" ref="childrenModel" ></children-model>
		<!-- 等价于下面 -->
		<!-- <childrenModel :items="items" @father="fatherMethod" :value="message" @input="onInput"></childrenModel> -->

		<childrenSlot v-for="item in items" :item="item" data="123">
			<p slot="header">显示父组件的头部</p>
			<p slot="footer">显示父组件的脚部</p>
			<!-- <li slot="item">从子组件获取的数据</li> --> <!-- vue会发警告 -->
		</childrenSlot>

		<render-template :message="5">
			<p slot="header">头部</p>
			<p slot="footer">尾部</p>
			<p >身体</p>
		</render-template>
	</div>
</template>
<script>
import Vue from 'vue';
import childrenModel from './childrenModel'
import childrenSlot from './childrenSlot'
import renderTemplate from './childrenRender'
export default Vue.component('father',{
	data: function(){
		return {
			items:[{
				name:"f1",
			},{
				name:"f2",
			}],
			message:"fatherMessage1",
			messageByFather: "父组件的信息"
		}
	},
	updated: function(){
		console.log(this.$refs);
	},
	template:'#model',
	methods: {
		fatherMethod: function(data){
			console.log('触发父方法！',data)
		},
		//等价于下面
		// onInput: function(e){
		// 	this.message = e;
		// }
	},
	watch:{
		message: function(...args){
			console.log('监听：')
			console.log('新值',args[0]);
			console.log('旧值',args[1]);
		}
	}
})
</script>
<style>
	.red {
		color: red;
	}
</style>