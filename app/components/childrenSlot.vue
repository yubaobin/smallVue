<template id="slot">
	<div>
		<!-- 默认的slot，找不到匹配的slot就替换-->
		<header>
		123
			<slot name="header"></slot>
		</header>
		<footer>
			<slot name="footer"></slot>
		</footer>
		<!-- 父组件的li找到这里的item，由于有多个，vue会发警告 -->
		<!-- <ul><slot v-for="item in items" name="item"></slot></ul> -->
	</div>
</template>
<script>
import Vue from 'vue'

export default Vue.component('childrenSlot',{
	props:['item'],
	template:"#slot",
	created: function(){
		console.log("created",this.$slots);
	},
	
})
</script>

<style scoped>
	header {
		color: blue;
	}
</style>