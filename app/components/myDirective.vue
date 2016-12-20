<template id="myDirective">
	<div>
	<div v-ybb='2' >
		<p></p>
	</div>
	<div v-ybb="{'num':'2'}" >
		<p></p>
	</div>
	</div>
</template>
<script>
import Vue from 'vue'
export default Vue.component('myDirective',{
	data: function(){
		return {
			items:[{
				name:1
			},{
				name:2
			}]
		}
	},
	template:'myDirective',

})
</script>