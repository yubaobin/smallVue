<template>
	<div>
		<p>{{msg}}</p>
		<p>{{msgAlias}}</p>
		<p>{{sameName}}</p>
		<p>{{addOne}}</p>
		<p>{{addOneReName}}</p>
		<p>{{mult}}</p>
		<div>
			<p>Person:</p>
			<div @click="getName()">name:{{name}}</div>
			<div @click="getAge()">age:{{age}}</div>
			<input v-model="num" />
			<button @click="oper('+')">增加</button>
			<button @click="oper('-')">减少</button>
		</div>
	</div>
</template>
<script >
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
	export default {
		data(){
			return {
				obj:{
					a:1,
					b:2
				},
				num:0
			}
		},
		created (){
			this.$store.commit({
				type:'increment',
				num:10,
				opr:'-'
			});
			this.$store.commit('ybb');
			this.$store.dispatch('actionName')
			console.log("123",this.$store.state.a.numA)
		},
		computed: {
			msg(){
				return this.$store.state.vuexMsg
			},
			addOne(){
				return this.$store.getters.addOne
			},
			mult() {
				return this.$store.getters.mult
			},
			...mapState([
				'sameName',
				'name',
				'age'
			]),
			...mapGetters({
				'addOneReName':'addOne'
			})
		},
		methods: {
			oper (type){
				this.$store.dispatch('oper',{num:this.num,oper:type})
			},
			...mapMutations({
				getName:'printName',
				getAge:'printAge'
			})
		}
	}
</script>