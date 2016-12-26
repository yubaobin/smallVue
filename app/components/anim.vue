<template id="anim">
	<div>
		<div>
			<button @click="show=!show">显示/隐藏</button>
			<transition name="fade">
				<p v-if="show">hello</p>
			</transition>
		</div>
		<div>
			<button @click="move=!move">动画</button>
			<transition name="move">
				<p v-if="move">hello</p>
			</transition>
		</div>

		<div>
			<p>多个组件</p>
			<button @click="changeStyle()">改变动画</button>
			<button @click="hasDate = !hasDate">获取数据</button>
			<transition :name="animstyle" mode="out-in">
				<table v-if="hasDate">
					<thead>
						<tr><th>姓名</th><th>年龄</th></tr>
					</thead>
					<tbody>
						<tr v-for="item in items"><td>{{item.name}}</td><td>{{item.age}}</td></tr>
					</tbody>
				</table>
				<p v-else>没数据</p>
			</transition>
			<div>
				<transition name="move" mode="in-out">
				  <button v-if="isEditing" key="save" @click="isEditing = !isEditing">
				    Save
				  </button>
				  <button v-else key="edit" @click="isEditing = !isEditing">
				    Edit
				  </button>
				</transition>
			</div>
			<p>上面的例子简写</p>
			<div>
				<transition name="move" mode="out-in">
				  <button v-bind:key="isEditing">
				    {{ isEditing ? 'Save' : 'Edit' }}
				  </button>
				</transition>
			</div>
			<p>transition-group</p>
			<div>
				<button v-on:click="add">Add</button>
				<button v-on:click="remove">Remove</button>
				<transition-group name="list" tag="p">
				 	<span v-for="item in array" v-bind:key="item" class="list-item">
				      {{ item }}
				    </span>
				</transition-group>
			</div>
			<div>
				<input type="text" v-model="status" />
				<p>{{statusMsg}}</p>
			</div>
		</div>
	</div>
</template>


<script>
import Vue from 'vue'

export default Vue.component('anim',{
	data:function(){
		return {
			show:true,
			move:true,
			hasDate:true,
			items:[{
				name:'小明',
				age: 15
			},{
				name:'小红',
				age: 16
			},{
				name:'小绿',
				age: 17
			}],
			animstyle:"fade",
			isEditing:true,
			array:[1,2,3,4,5,6,7,8,9],
			nextNum: 10,
			query:"",
			list: [
		      { msg: 'Bruce Lee' },
		      { msg: 'Jackie Chan' },
		      { msg: 'Chuck Norris' },
		      { msg: 'Jet Li' },
		      { msg: 'Kung Fury' }
		    ],
		    status: "123",
		    statusMsg: ""
		}
	},
	template: "#anim",
	computed: {
	    computedList: function () {
	      var vm = this
	      return this.list.filter(function (item) {
	        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
	      })
	    }
	  },
	methods:{
		randomIndex: function () {
	      return Math.floor(Math.random() * this.array.length)
	    },
	    add: function () {
	      this.array.splice(this.randomIndex(), 0, this.nextNum++)
	    },
	    remove: function () {
	      this.array.splice(this.randomIndex(), 1)
	    },
	    changeStyle: function(){
	    	if(this.animstyle == "fade"){
	    		this.animstyle = 'move';
	    	}else {
	    		this.animstyle = 'fade';
	    	}
	    }
	},
	watch:{
		status:function(newValue,oldValue){
			for(let i of newValue){
				this.statusMsg = i;
			}
			this.statusMsg = newValue;
		}
	}
})	
</script>

<style>
.fade-enter-active {
  opacity: 1;
  transition: all .5s;
}
.fade-leave {
  color: #EADABA;
}
.fade-enter {
  opacity: 0;
  transition: all .5s;
}	
.fade-leave-active {
  opacity: 0;
  transition: all .5s;
}

.move-enter {
	transform: translate(200%, 0);
}
.move-enter-active {
	animation: flyleft .5s;
}
.move-leave-active {
	animation: flyright .5s;
}

/*动画*/
@keyframes flyleft {
  0% {
    transform: translate(200%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
@keyframes flyright {
   0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(200%, 0);
    opacity: 0;
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
  transition: all 1s;
}
.list-leave-active {
  position: absolute;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
</style>