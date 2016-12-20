<template id="template">
	<div>
		<div>{{time}}</div>
		<div>{{today | getToDay}}</div>
		<div><num :count="count" :val="val" :option="option" ></num></div>
		<span class="message" :style="moveCss" @click="add()">{{message}}</span>
	</div>
</template>

<script>
import Vue from 'vue'
import num from './num'
import msg from '../util/messagebox'
export default Vue.component('date',{
	props:['message','arr'],
	data: function(){
		return {
			time : '',
			count:0,
			width:window.innerWidth,
			height:window.innerHeight,
			dataArr:this.arr, //父组件的参数
			//移动css
			moveCss: {
				top: '0px',
				left: '0px'
			}
		}
	},
	template: '#template',
	created : function(){
		//this.arr[3] = 'ybb'; 
		//console.log(this.dataArr);//由于这只是父组件参数的引用 ，所以会改变
		setInterval(() => {
			let date = new Date();
			let day = date.toLocaleDateString().replace(/\//g,'\-');
			let hour = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			this.time = day + " " + hour + ":" + minutes + ":" + seconds;
		},1000)
		// setInterval(() => {
		// 	this.moveCss.left = Math.floor(Math.random()*this.width) + 'px';
		// 	this.moveCss.top = Math.floor(Math.random()*this.height) + 'px';
		// },500)
	},
	computed:{
		today: function(){
			return new Date().getDay();
		}
	},
	methods: {
		add: function(){
			this.count ++;
			this.$emit('updateMsg',this.count);
			let m = new msg('',{message:'123'});
			m.show();
		}
	}
})
</script>

<style> 
	.message {
		position: relative;
		transition: all 1s;
		cursor: pointer;
	}
</style>