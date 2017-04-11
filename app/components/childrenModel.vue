<template id="children">
	<div>
		<ul>
			<li v-for="item in items" @click="clickli">{{item.name}}</li>
		</ul>
		<input :value="value" @input="onInput"/>
		<input type="checkbox" :value="1" v-model="checkModel" />
		<input type="checkbox" :value="2" v-model="checkModel" />
		{{ checkModel }}
	</div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('childrenModel',{
		data () {
			return {
				checkModel: [1],
			}
		},
		props:{
			items:Array,
			value:null
		},
		template: "#children",
		methods: {
			clickli: function(e){
				this.$emit('father',e.target);
			},
			onInput: function(e){
				this.$emit('input',e.target.value);
			}
		}

	})
</script>

<style lang="sass">
$blue: #3069F9;
ul,li {
	list-style: none;
	padding: 0;
	margin: 0;
}	
input {
	border: 1px solid $blue;
}
</style>