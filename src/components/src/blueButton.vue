<template>
<button class="blueButton" :disabled="disabled" type="button" @click="handleClick" @mouseover="handleHover" v-bind:class="{on: active, 'off' : !active}"><slot /></button>
</template>
<script>
export default {
	name: 'BlueButton',

	props :{

	type : {
	type: String,
	default : 'button'
	},

	data : {
	active : false
	},

	disabled : {
	type : Boolean,
	default : false
	}
	},

	methods:{

	handleClick : function(ev){
	this.$emit('click',ev);
	},

	handleHover : function(ev){
	console.log("hover");
	if( this.active ==true) this.active = flase;
	else this.active = true;
	}

	}
}
</script>
<style>

.blueButton {
	padding : 0.6em 1.3em;
	background-color :#017bff ;
	border-radius: 0.8em;
	border : none;
	color : #fff;
	opacity : 1;
}

.on {
	background-color : #fff;
}
.off{
	background-color : #017bff;
}


</style>