
<script>
import Vue from 'vue'

//定义混合对象
var myMixin1 = {
	created: function () {
	  this.hello();
	  
	},
    methods: {
	  hello: function () {
	    console.log('hello from mixin!')
	  }
	},
	myOption:{
		msg: '閪佬1'
	}
}
var myMixin2 = {
	data:function(){
		return {
			message: 'hello'
		}
	},
	created: function(){

	},
	myOption:{
		msg: '閪佬2'
	}
}
Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal){
	if(!fromVal) return toVal;
	if(!toVal) return fromVal;
	var result = Object.create(null);
	Object.assign(result,fromVal,toVal);
	return result;
}
export default Vue.component('mixins',{
	mixins: [myMixin1,myMixin2],
	data:function(){
		return {
			message:'fuckyou'
		}
	},
	created: function(){
		console.log("hello from component!",this.$options.myOption);
	},
	template: '<div>{{message}}</div>',
	myOption:{
		b: '閪佬',
		a:1
	}
})
</script>