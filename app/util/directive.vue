<script >
import Vue from 'vue'
Vue.directive('ybb',{
	inserted:function(el,binding,vnode,oldVnode){
		console.log(vnode.context); //组件
		console.log(binding.value); //数值
		console.log(binding.expression); //字符串形式
	}
})
</script>