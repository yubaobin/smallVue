<script>
import Vue from 'vue'
export default Vue.component('renderTemplate',{
	data: function(){
		return {
			items: [{
				name:1
			},{
				name:2
			},{
				name:3
			}]
		}
	},
	render: function(createElement) {
		if(this.items.length){
			return createElement('div',this.items.map(function(item){
				return createElement('p', '<p>'+item.name+'</p>');
			}))
		}else {
			return createElement('div',
				{
					'class':{ //类
						move:true
					},
					'style':{ //样式
						fontSize:'20px',
						color: '#CDCDCD'
					},
					'attrs':{ //html属性
						id:'renderid' + this.len
					},
					'props':{//父类传过来的属性
						len:'message'
					},
					// 'domProps':{
					// 	innerHTML:'html'
					// },
					on: {
						click: function(){
							console.log(this.fatherMessage)
						}
					}	
				},[
				createElement('header',this.$slots.header),
				createElement('div',this.$slots.default),
				createElement('footer',this.$slots.footer)
			]);
		}
	}

	//函数化组件 render方法多个context属性，上下文
	// functional: true,
	// render: function(createElement, context){
	// 	console.log('context',context.children);
	// 	return createElement('p',
	// 		context.data,
	// 		context.props.message
	// 	);
	// },
	// props:{
	// 	message:{
	// 		type:Number
	// 	}
	// }
})	
</script>